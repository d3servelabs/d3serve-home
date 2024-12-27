"use client";

import { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import { AlertTriangleIcon } from "lucide-react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <Alert variant="destructive" className="mb-6 w-full max-w-md">
        <AlertTriangleIcon className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error.message || "Something went wrong!"}
        </AlertDescription>
      </Alert>
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold">Oops! An error occurred</h2>
        <div className="mb-4 text-gray-600">
          Don&#39;t worry, we&#39;re on it. In the meantime, you can try again
          or go back to the homepage.
        </div>
        {error.digest && (
          <div className="text-sm text-gray-500">Error ID: {error.digest}</div>
        )}
      </div>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
