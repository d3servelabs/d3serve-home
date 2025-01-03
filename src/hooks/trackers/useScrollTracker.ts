"use client";

import { useEffect, useCallback, useRef } from "react";

interface Options {
  threshold?: number;
  debounce?: number;
}

export const useScrollTracker = (
  callback: (scrollData: { percentage: number; position: number }) => void,
  options: Options = {},
) => {
  const position = useRef(0);
  const debouncer = useRef<NodeJS.Timeout | null>(null);

  const { threshold = 100, debounce = 300 } = options;

  const handle = useCallback(() => {
    if (debouncer.current) {
      clearTimeout(debouncer.current);
    }

    debouncer.current = setTimeout(() => {
      if (Math.abs(window.scrollY - position.current) > threshold) {
        callback({
          percentage: Math.round(
            (window.scrollY /
              (document.documentElement.scrollHeight - window.innerHeight)) *
              100,
          ),
          position: window.scrollY,
        });
        position.current = window.scrollY;
      }
    }, debounce);
  }, [callback, threshold, debounce]);

  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      if (debouncer.current) {
        clearTimeout(debouncer.current);
      }
    };
  }, [handle]);
};
