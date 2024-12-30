"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useState,
  useEffect,
} from "react";
import { cn } from "@/utils/cn";

export type HidderProps = HTMLAttributes<HTMLDivElement> & {
  duration?: number;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Hidder: ForwardRefExoticComponent<HidderProps> = forwardRef<
  HTMLDivElement,
  HidderProps
>(function Hidder(
  { duration = 0, className, children, ...rest }: HidderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      {children}
    </div>
  );
});

Hidder.displayName = "Hidder";
