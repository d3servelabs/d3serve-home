import { useState, useEffect, RefObject, useCallback } from "react";

interface IntersectionOptions extends IntersectionObserverInit {
  freeze?: boolean;
}

export function useIntersection(
  ref: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freeze = false,
  }: IntersectionOptions = {},
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = entry?.isIntersecting && freeze;

  const update = useCallback(([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  }, []);

  useEffect(() => {
    const support = !!window.IntersectionObserver;

    if (!support || frozen || !ref?.current) return;

    const observer = new IntersectionObserver(update, {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(ref?.current);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin, frozen, update]);

  return entry;
}
