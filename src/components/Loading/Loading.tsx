"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type LoadingProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Loading: ForwardRefExoticComponent<LoadingProps> = forwardRef<
  HTMLDivElement,
  LoadingProps
>(function Loading(
  { className, ...rest }: LoadingProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Loading
    </div>
  );
});

Loading.displayName = "Loading";
