"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type CursorProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Cursor: ForwardRefExoticComponent<CursorProps> = forwardRef<
  HTMLDivElement,
  CursorProps
>(function Cursor(
  { className, ...rest }: CursorProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Cursor
    </div>
  );
});

Cursor.displayName = "Cursor";
