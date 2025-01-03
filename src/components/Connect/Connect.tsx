"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Social } from "@/components/Social";
import { WEBSITE } from "@/constants";
import { useTrackers } from "@/contexts/trackers";
import { CONTACTS, SOCIALS } from "@/types";

export type ConnectProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Connect: ForwardRefExoticComponent<ConnectProps> = forwardRef<
  HTMLDivElement,
  ConnectProps
>(function Connect(
  { className, ...rest }: ConnectProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { trackers } = useTrackers();

  const handleSocialClick = useCallback(
    async (item: SOCIALS | CONTACTS) => {
      await trackers(`${item}_CLICK`);
    },
    [trackers],
  );

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-4 md:gap-8 w-full", className)}
      {...rest}
    >
      <Heading level={3} className="text-2xl font-bold text-white md:text-4xl">
        Stay in touch
      </Heading>
      <div className="flex w-full  text-base leading-7 text-white/60 md:text-xl md:leading-9">
        Follow us on social media and stay updated with the latest news,
        features, and insights from the Namefi ecosystem.
      </div>
      <Social
        onItemClick={handleSocialClick}
        className="flex items-center gap-2 md:gap-4"
        discord={WEBSITE.socials.discord}
        twitter={WEBSITE.socials.twitter}
        github={WEBSITE.socials.github}
        telegram={WEBSITE.socials.telegram}
        linkedin={WEBSITE.socials.linkedin}
        item={{
          className:
            "text-white/50 bg-white/5 hover:bg-white hover:text-black rounded-full min-w-12 min-h-12 size-12 flex items-center text-center justify-center duration-150 transition-all hover:scale-[101%] active:scale-[99%]",
        }}
        icon={{ className: "size-5" }}
      />
    </div>
  );
});

Connect.displayName = "Connect";
