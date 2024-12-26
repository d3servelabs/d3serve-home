"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Header: ForwardRefExoticComponent<HeaderProps> = forwardRef<
  HTMLDivElement,
  HeaderProps
>(function Header(
  { className, children, ...rest }: HeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <header ref={ref} className={cn("px-8 py-2", className)} {...rest}>
      {children}
    </header>
  );
});

Header.displayName = "Header";
