"use client";

import { HTMLAttributes, useCallback, useEffect } from "react";
import { Button } from "@/components/Button";

type Props = HTMLAttributes<HTMLDivElement> & {
  error: Error & { digest?: string };
  reset?: () => void;
};

export default function Error({ error, reset }: Readonly<Props>) {
  const handleAgain = useCallback(() => {
    if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  }, [reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-6xl font-bold">Oops! An error occurred</h1>
        <div className="text-2xl">
          Don&#39;t worry, we&#39;re on it. In the meantime, you can try again
          or go back to the homepage.
        </div>
        {error.digest && (
          <div className="text-lg text-muted-foreground">
            Error ID: {error.digest}
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={handleAgain}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Try again
          </Button>
          <Button href="/" variant="secondary" className="w-full sm:w-auto">
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
