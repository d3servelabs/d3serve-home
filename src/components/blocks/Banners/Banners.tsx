"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/Button";
import SvgStars from "@/components/icons/icons/Stars";
import SvgArrowUpRight from "@/components/icons/icons/ArrowUpRight";
import { TextGradient } from "@/components/TextGradient";
import { Heading } from "@/components/Heading";

export type BannersProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Banners: ForwardRefExoticComponent<BannersProps> = forwardRef<
  HTMLDivElement,
  BannersProps
>(function Banners(
  { className, ...rest }: BannersProps,
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
      <div className="flex w-full items-center justify-center">
        <Button variant="quaternary" size="sm">
          <SvgStars className="mr-2 inline-flex size-5" />
          ICANN Accreditation
        </Button>
      </div>
      <div className="mt-8 flex w-full items-center justify-center text-center">
        <TextGradient
          duration={5000}
          colors={[
            "#0091FF 0%",
            "#FFF 25%",
            "#F76808 50%",
            "#FFF 75%",
            "#0091FF 100%",
          ]}
          className="text-[80px] font-bold leading-tight"
        >
          <Heading level={1}>A Pioneer of Digital Trust</Heading>
        </TextGradient>
      </div>
      <div className="flex w-full items-center justify-center text-center text-2xl text-white/70">
        Building digital trust with blockchain powered software and services.
        Maker of Namefi.io and more
      </div>
      <div className="mt-16 flex w-full flex-wrap items-center justify-center gap-8 text-center">
        <Button
          href="https://hackmd.io/@d3servelabs/vision"
          target="_blank"
          variant="primary"
          size="lg"
          className="bg-white/70"
        >
          Read manifesto
          <SvgArrowUpRight className="ml-2 inline-flex size-6" />
        </Button>
        <Button variant="tertiary" size="lg" className="">
          Partner with us
        </Button>
      </div>
    </div>
  );
});

Banners.displayName = "Banners";
