"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Subscriber } from "@/components/Subscriber";

export type SubscribeProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Subscribe: ForwardRefExoticComponent<SubscribeProps> = forwardRef<
  HTMLDivElement,
  SubscribeProps
>(function Subscribe(
  { className, ...rest }: SubscribeProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-8 w-full", className)}
      {...rest}
    >
      <Heading level={3} className="text-4xl font-bold text-white">
        Subscribe to receive updates
      </Heading>
      <div className="flex w-full text-xl leading-9 text-white/60">
        Stay ahead with the latest trends, onchain domains, and exclusive
        product news.
      </div>
      <Subscriber />
    </div>
  );
});

Subscribe.displayName = "Subscribe";
