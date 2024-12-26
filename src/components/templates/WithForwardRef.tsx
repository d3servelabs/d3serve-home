"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type WithForwardRefProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const WithForwardRef: ForwardRefExoticComponent<WithForwardRefProps> =
  forwardRef<HTMLDivElement, WithForwardRefProps>(function WithForwardRef(
    { className, ...rest }: WithForwardRefProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <div ref={ref} className={cn("", className)} {...rest}>
        WithForwardRef
      </div>
    );
  });

WithForwardRef.displayName = "WithForwardRef";
