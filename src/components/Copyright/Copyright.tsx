"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type CopyrightProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Copyright: ForwardRefExoticComponent<CopyrightProps> = forwardRef<
  HTMLDivElement,
  CopyrightProps
>(function Copyright(
  { className, ...rest }: CopyrightProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("text-lg", className)} {...rest}>
      &copy; D3SERVE LABS, Inc.
    </div>
  );
});

Copyright.displayName = "Copyright";
