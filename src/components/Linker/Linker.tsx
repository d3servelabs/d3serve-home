"use client";

import {
  forwardRef,
  ForwardRefExoticComponent,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
  Ref,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import type { UrlObject } from "url";
import Link from "next/link";

export type LinkerProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string | UrlObject;
    target?: HTMLAttributeAnchorTarget;
  };

export const Linker: ForwardRefExoticComponent<LinkerProps> = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LinkerProps
>(function Linker(
  { href, target, className, children, ...rest }: LinkerProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
) {
  if (href) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        className={cn("", className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </button>
  );
});

Linker.displayName = "Linker";
