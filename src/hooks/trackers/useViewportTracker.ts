"use client";

import { useEffect, useCallback } from "react";

export const useViewportTracker = (callback: (visible: boolean) => void) => {
  const handle = useCallback(() => {
    callback(!document.hidden);
  }, [callback]);

  useEffect(() => {
    document.addEventListener("visibilitychange", handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
    };
  }, [handle]);
};
