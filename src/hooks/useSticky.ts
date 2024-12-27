import { useEffect, useState } from "react";

type UseStickyOptions = {
  offset?: number;
  range?: [number, number];
  target?: HTMLElement | null;
  onChange?: (isSticky: boolean, direction: "up" | "down" | null) => void;
  ms?: number;
};

export function useSticky({
  offset = 0,
  range,
  target = null,
  onChange,
  ms = 0,
}: UseStickyOptions = {}) {
  const [sticky, setSticky] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const scrollTop = target
        ? target.scrollTop
        : window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? "down" : "up";
      setDirection(direction);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      const isInRange =
        range && range.length === 2
          ? scrollTop > range[0] && scrollTop < range[1]
          : true;
      const isSticky = scrollTop > offset && isInRange;
      if (sticky !== isSticky) {
        setSticky(isSticky);
        onChange?.(isSticky, direction);
      }
    };

    const debouncedScroll = () => {
      if (ms > 0) {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(handleScroll, ms);
      } else {
        handleScroll();
      }
    };

    const element = target || window;
    element.addEventListener("scroll", debouncedScroll);

    return () => {
      element.removeEventListener("scroll", debouncedScroll);
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [offset, range, target, onChange, ms, sticky]);

  return { sticky, direction };
}
