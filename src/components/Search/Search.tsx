"use client";

import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/utils/cn";
import SvgSearch from "@/components/icons/icons/Search";

export type SearchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: ForwardedRef<HTMLButtonElement>;
};

export const Search: ForwardRefExoticComponent<SearchProps> = forwardRef<
  HTMLButtonElement,
  SearchProps
>(function Search(
  { className, ...rest }: SearchProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button ref={ref} className={cn("", className)} {...rest}>
      <SvgSearch className="" />
      <span className="sr-only">Search</span>
    </button>
  );
});

Search.displayName = "Search";
