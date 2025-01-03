"use client";

import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
} from "react";
import { cn } from "@/utils/cn";
import SvgSearch from "@/components/icons/icons/Search";
import type { UrlObject } from "url";
import { Linker } from "@/components/Linker";

export type SearchProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string | UrlObject;
    target?: HTMLAttributeAnchorTarget;
  } & {
    ref?: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;
  };

export const Search: ForwardRefExoticComponent<SearchProps> = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SearchProps
>(function Search(
  { href, target, className, ...rest }: SearchProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
) {
  return (
    <Linker
      ref={ref}
      href={href}
      target={target}
      className={cn("", className)}
      {...rest}
    >
      <SvgSearch className="size-6" />
      <span className="sr-only">Search</span>
    </Linker>
  );
});

Search.displayName = "Search";
