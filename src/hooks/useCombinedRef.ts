"use client";

import { ForwardedRef, useMemo, useRef } from "react";

export const useCombinedRef = <T>(ref: ForwardedRef<T>) => {
  const internalRef = useRef<T | null>(null);

  const externalRef = useMemo(
    () => (element: T) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
      internalRef.current = element;
    },
    [ref, internalRef],
  );

  return useMemo(
    () => ({ externalRef, internalRef }),
    [externalRef, internalRef],
  );
};
