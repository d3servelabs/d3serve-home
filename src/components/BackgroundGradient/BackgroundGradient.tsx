"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
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
          <div className="absolute inset-0 bg-black/20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                opacity: 1,
                background: `url("/noise.png") lightgray 0% 0% / 100px 100px repeat`,
                mixBlendMode: "soft-light",
              }}
            ></div>
          </div>
          {children}
        </div>
      );
    },
  );

BackgroundGradient.displayName = "BackgroundGradient";
