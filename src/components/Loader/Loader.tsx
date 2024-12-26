"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Loader: ForwardRefExoticComponent<LoaderProps> = forwardRef<
  HTMLDivElement,
  LoaderProps
>(function Loader(
  { className, ...rest }: LoaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Loader
    </div>
  );
});

Loader.displayName = "Loader";
