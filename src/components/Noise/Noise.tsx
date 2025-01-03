"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type NoiseProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Noise: ForwardRefExoticComponent<NoiseProps> = forwardRef<
  HTMLDivElement,
  NoiseProps
>(function Noise(
  { className, style, children, ...rest }: NoiseProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn("opacity-50 mix-blend-soft-light", className)}
      style={{
        background: `url("/noise.png") 0% 0% / 100px 100px repeat`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

Noise.displayName = "Noise";
