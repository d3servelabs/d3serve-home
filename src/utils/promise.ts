export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const waiter = async <T>(
  promise: PromiseLike<T>,
  ms: number,
): Promise<T> => {
  if (ms <= 0) return promise;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout exceeded")), ms),
    ),
  ]);
};

export const resolve = async <T>(
  promise: () => PromiseLike<T>,
  options?: {
    retries?: number; // Number of retry attempts
    delay?: number; // Delay between retries
    timeout?: number; // Timeout for each promise
    onRetry?: (attempt: number, error: Error) => void; // Callback on retry
    shouldRetry?: (error: Error) => boolean; // Conditional retry logic
    exponential?: boolean; // Use exponential backoff for delays
    maxDelay?: number; // Maximum delay for exponential backoff
    retryOnTimeout?: boolean; // Retry if a timeout error occurs
  },
): Promise<[T | null, Error | null]> => {
  const retries = options?.retries ?? 0;
  const delay = options?.delay ?? 0;
  const exponential = options?.exponential ?? false;
  const maxDelay = options?.maxDelay ?? Infinity;
  const retryOnTimeout = options?.retryOnTimeout ?? false;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await waiter(promise(), options?.timeout ?? 0);
      return [response, null];
    } catch (error) {
      const isTimeoutError =
        error instanceof Error && error.message === "Timeout exceeded";

      if (
        attempt < retries &&
        (options?.shouldRetry?.(error as Error) ?? true) &&
        (!isTimeoutError || retryOnTimeout)
      ) {
        options?.onRetry?.(attempt + 1, error as Error);

        const nextDelay = exponential
          ? Math.min(delay * 2 ** attempt, maxDelay)
          : delay;

        if (nextDelay > 0) {
          await wait(nextDelay);
        }
      } else {
        return [null, error as Error];
      }
    }
  }

  return [null, new Error("Unexpected behavior")];
};
