"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type CompaniesProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Companies: ForwardRefExoticComponent<CompaniesProps> = forwardRef<
  HTMLDivElement,
  CompaniesProps
>(function Companies(
  { className, ...rest }: CompaniesProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Companies
    </div>
  );
});

Companies.displayName = "Companies";
