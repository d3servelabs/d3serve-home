"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Social } from "@/components/Social";
import { WEBSITE } from "@/constants";

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
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-8 w-full", className)}
      {...rest}
    >
      <Heading level={3} className="text-white text-4xl font-bold">
        Stay in touch
      </Heading>
      <div className="w-full text-white/70 text-2xl flex">
        Follow us on social media and stay updated with the latest news,
        features, and insights from the Namefi ecosystem.
      </div>
      <Social
        className="gap-4 flex items-center"
        discord={WEBSITE.socials.discord}
        twitter={WEBSITE.socials.twitter}
        github={WEBSITE.socials.github}
        telegram={WEBSITE.socials.telegram}
        linkedin={WEBSITE.socials.linkedin}
        item={{
          className:
            "text-white/50 bg-white/10 rounded-full size-12 flex items-center text-center justify-center duration-150 transition-all hover:text-white hover:scale-[101%] active:scale-[99%]",
        }}
      />
    </div>
  );
});

Connect.displayName = "Connect";
