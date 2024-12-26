"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Logotype } from "@/components/Logotype";
import { Social } from "@/components/Social";
import { Search } from "@/components/Search";
import { WEBSITE } from "@/constants";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Header: ForwardRefExoticComponent<HeaderProps> = forwardRef<
  HTMLDivElement,
  HeaderProps
>(function Header(
  { className, ...rest }: HeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <header
      ref={ref}
      className={cn(
        "px-8 py-2 flex items-center gap-3 justify-between",
        className,
      )}
      {...rest}
    >
      <Logotype />

      <Social
        before={<Search />}
        discord={WEBSITE.socials.discord}
        twitter={WEBSITE.socials.twitter}
        github={WEBSITE.socials.github}
        telegram={WEBSITE.socials.telegram}
        linkedin={WEBSITE.socials.linkedin}
      />
    </header>
  );
});

Header.displayName = "Header";
