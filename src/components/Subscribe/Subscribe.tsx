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
      <Heading level={3} className="text-white text-4xl font-bold">
        Subscribe to receive updates
      </Heading>
      <div className="w-full text-white/70 text-2xl flex">
        Stay ahead with the latest trends, onchain domains, and exclusive
        product news.
      </div>
      <Subscriber />
    </div>
  );
});

Subscribe.displayName = "Subscribe";
