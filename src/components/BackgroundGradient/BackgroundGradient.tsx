"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Noise } from "@/components/Noise";
export type BackgroundGradientProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const BackgroundGradient: ForwardRefExoticComponent<BackgroundGradientProps> =
  forwardRef<HTMLDivElement, BackgroundGradientProps>(
    function BackgroundGradient(
      { className, children, ...rest }: BackgroundGradientProps,
      ref: ForwardedRef<HTMLDivElement>,
    ) {
      return (
        <div ref={ref} className={cn("relative", className)} {...rest}>
          <Noise className="pointer-events-none absolute inset-0 size-full" />
          {children}
        </div>
      );
    },
  );

BackgroundGradient.displayName = "BackgroundGradient";
