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
      className={cn("h-20 min-h-20 bg-background max-h-20 w-full", className)}
      {...rest}
    >
      <div className="fixed backdrop-blur w-full px-8 py-4 flex h-20 min-h-20 max-h-20 items-center gap-3 justify-between">
        <Logotype />

        <Social
          className="gap-1 flex items-center"
          before={
            <Search className="text-white/50 p-4 duration-150 transition-all hover:text-white hover:scale-[101%] active:scale-[99%]" />
          }
          discord={WEBSITE.socials.discord}
          twitter={WEBSITE.socials.twitter}
          email={WEBSITE.contacts.email}
          item={{
            className:
              "text-white/50 p-4 duration-150 transition-all hover:text-white hover:scale-[101%] active:scale-[99%]",
          }}
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
