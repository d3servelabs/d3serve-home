"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type TopperProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Topper: ForwardRefExoticComponent<TopperProps> = forwardRef<
  HTMLDivElement,
  TopperProps
>(function Topper(
  { className, ...rest }: TopperProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Topper
    </div>
  );
});

Topper.displayName = "Topper";
