"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useEffect,
  useState,
} from "react";
import { cn } from "@/utils/cn";
import { useCombinedRef } from "@/hooks/useCombinedRef";

export type IntersectionObserverProps = HTMLAttributes<HTMLDivElement> & {
  onIntersect?: (intersecting: boolean) => void;
  threshold?: number | number[];
  margin?: string;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const IntersectionObserver: ForwardRefExoticComponent<IntersectionObserverProps> =
  forwardRef<HTMLDivElement, IntersectionObserverProps>(
    function IntersectionObserver(
      {
        onIntersect,
        threshold = 0,
        margin = "0px",
        className,
        children,
        ...rest
      }: IntersectionObserverProps,
      ref: ForwardedRef<HTMLDivElement>,
    ) {
      const [intersecting, setIntersecting] = useState(false);
      const { externalRef, internalRef } = useCombinedRef<HTMLDivElement>(ref);

      useEffect(() => {
        const observer = new window.IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
            onIntersect?.(entry.isIntersecting);
          },
          { threshold, rootMargin: margin },
        );

        if (internalRef.current) {
          observer.observe(internalRef.current);
        }

        return () => {
          if (internalRef.current) {
            observer.unobserve(internalRef.current);
          }
        };
      }, [ref, onIntersect, threshold, margin, internalRef]);

      return (
        <div ref={externalRef} className={cn("", className)} {...rest}>
          {intersecting ? children : " "}
        </div>
      );
    },
  );

IntersectionObserver.displayName = "IntersectionObserver";
