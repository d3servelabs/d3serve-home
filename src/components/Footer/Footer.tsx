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
        "px-8 w-full justify-center items-center text-center py-8 bg-[#0e0e0e]",
        className,
      )}
      {...rest}
    >
      <Copyright className="text-lg text-white/60" />
    </footer>
  );
});

Footer.displayName = "Footer";
