"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useCallback } from "react";

export default function Page() {
  const throwError = useCallback(() => {
    throw new Error("This is a test error");
  }, []);

  return (
    <div className="flex w-full flex-1 flex-col gap-8 p-8">
      <Container className="space-x-8 space-y-8">
        <Button variant="destructive" onClick={throwError}>
          Throw Error
        </Button>
      </Container>
    </div>
  );
}
