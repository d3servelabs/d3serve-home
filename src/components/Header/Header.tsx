"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
} from "react";
import { cn } from "@/utils/cn";
import { Logotype } from "@/components/Logotype";
import { Social } from "@/components/Social";
import { Search } from "@/components/Search";
import { EVENTS, WEBSITE } from "@/constants";
import { useTrackers } from "@/contexts/trackers";
import { CONTACTS, SOCIALS } from "@/types";

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
  const { trackers } = useTrackers();

  const handleLogotypeClick = useCallback(async () => {
    await trackers(EVENTS.LOGOTYPE_CLICK);
  }, [trackers]);

  const handleSocialClick = useCallback(
    async (item: SOCIALS | CONTACTS) => {
      await trackers(`${item}_CLICK`);
    },
    [trackers],
  );

  const handleSearchClick = useCallback(async () => {
    await trackers(EVENTS.SEARCH_CLICK);
  }, [trackers]);

  return (
    <header
      ref={ref}
      className={cn(
        "h-20 min-h-20 relative z-10 bg-background max-h-20 w-full",
        className,
      )}
      {...rest}
    >
      <div className="fixed z-10 flex h-20 max-h-20 min-h-20 w-full items-center justify-between gap-3 px-8 py-4 backdrop-blur">
        <Logotype onClick={handleLogotypeClick} />

        <Social
          onItemClick={handleSocialClick}
          className="flex items-center gap-1"
          before={
            <Search
              href={WEBSITE.links.search}
              target="_blank"
              onClick={handleSearchClick}
              className="p-4 text-white/50 transition-all duration-150 hover:scale-[101%] hover:text-white active:scale-[99%]"
            />
          }
          discord={WEBSITE.socials.discord}
          twitter={WEBSITE.socials.twitter}
          email={WEBSITE.contacts.email}
          item={{
            className:
              "text-white/50 p-4 duration-150 transition-all hover:text-white hover:scale-[101%] active:scale-[99%]",
          }}
          icon={{ className: "size-6" }}
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
