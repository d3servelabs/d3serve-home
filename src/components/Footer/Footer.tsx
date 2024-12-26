"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Footer: ForwardRefExoticComponent<FooterProps> = forwardRef<
  HTMLDivElement,
  FooterProps
>(function Footer(
  { className, children, ...rest }: FooterProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <footer ref={ref} className={cn("px-8 py-2", className)} {...rest}>
      {children}
    </footer>
  );
});

Footer.displayName = "Footer";
