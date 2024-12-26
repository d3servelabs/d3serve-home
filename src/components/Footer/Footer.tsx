"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Copyright } from "@/components/Copyright";

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Footer: ForwardRefExoticComponent<FooterProps> = forwardRef<
  HTMLDivElement,
  FooterProps
>(function Footer(
  { className, ...rest }: FooterProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <footer
      ref={ref}
      className={cn(
        "px-8 w-full justify-center items-center text-center py-2",
        className,
      )}
      {...rest}
    >
      <Copyright />
    </footer>
  );
});

Footer.displayName = "Footer";