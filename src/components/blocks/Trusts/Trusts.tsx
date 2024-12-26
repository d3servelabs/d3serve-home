"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type TrustsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Trusts: ForwardRefExoticComponent<TrustsProps> = forwardRef<
  HTMLDivElement,
  TrustsProps
>(function Trusts(
  { className, ...rest }: TrustsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Trusts
    </div>
  );
});

Trusts.displayName = "Trusts";
