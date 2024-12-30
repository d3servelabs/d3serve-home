export interface FetchWithRetryOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
  maxRetryDelay?: number;
  backoffFactor?: number;
  retryOn?: (
    response: Response | null,
    attempt: number,
  ) => boolean | Promise<boolean>;
  onRetry?: (attempt: number, delay: number) => void;
  timeout?: number;
}

export const fetchWithRetry = async (
  url: string,
  options: FetchWithRetryOptions = {},
): Promise<Response> => {
  const {
    retries = 3,
    retryDelay = 1500,
    maxRetryDelay = 30000,
    backoffFactor = 2,
    retryOn = async (response) => !response?.ok,
    onRetry,
    timeout,
    ...fetchOptions
  } = options;

  let lastResponse: Response | null = null;
  let currentDelay = retryDelay;

  const fetchWithTimeout = async (
    input: string,
    init: RequestInit,
    timeoutMs?: number,
  ): Promise<Response> => {
    if (!timeoutMs) return fetch(input, init);
    return Promise.race([
      fetch(input, init),
      new Promise<Response>((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), timeoutMs),
      ),
    ]);
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, fetchOptions, timeout);

      lastResponse = response;

      const shouldRetry = await retryOn(response, attempt);
      if (!shouldRetry) return response;
      if (attempt < retries) {
        onRetry?.(attempt, currentDelay);
        await new Promise((resolve) => setTimeout(resolve, currentDelay));
        currentDelay = Math.min(currentDelay * backoffFactor, maxRetryDelay);
      }
    } catch {
      if (attempt === retries && lastResponse) return lastResponse;
      await new Promise((resolve) => setTimeout(resolve, currentDelay));
      currentDelay = Math.min(currentDelay * backoffFactor, maxRetryDelay);
    }
  }

  return (
    lastResponse ||
    new Response(undefined, {
      status: 500,
      statusText: "Internal Error",
    })
  );
};
