"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";

export type TrustsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Trusts: ForwardRefExoticComponent<TrustsProps> = forwardRef<
  HTMLDivElement,
  TrustsProps
>(function Trusts(
  { className, ...rest }: TrustsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-8 w-full text-center items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-6xl font-bold" level={2}>
        Why digital trust
      </Heading>
    </div>
  );
});

Trusts.displayName = "Trusts";
