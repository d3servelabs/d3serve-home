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
      <div className="w-full flex items-center justify-center">
        <Button variant="quaternary" size="sm">
          <SvgStars className="size-5 inline-flex mr-2" />
          ICANN Accreditation
        </Button>
      </div>
      <div className="w-full mt-8 flex items-center text-center justify-center">
        <TextGradient
          duration={5000}
          colors={[
            "#0091FF 0%",
            "#FFF 25%",
            "#F76808 50%",
            "#FFF 75%",
            "#0091FF 100%",
          ]}
          className="text-[80px] font-bold"
        >
          <Heading level={1}>A Pioneer of Digital Trust</Heading>
        </TextGradient>
      </div>
      <div className="w-full text-white/70 text-2xl flex items-center text-center justify-center">
        Building digital trust with blockchain powered software and services.
        Maker of Namefi.io and more
      </div>
      <div className="w-full gap-8 mt-16 flex items-center text-center justify-center">
        <Button
          href="https://hackmd.io/@d3servelabs/vision"
          target="_blank"
          variant="primary"
          size="lg"
          className="bg-white/70"
        >
          Read manifesto
          <SvgArrowUpRight className="size-6 inline-flex ml-2" />
        </Button>
        <Button variant="tertiary" size="lg" className="">
          Partner with us
        </Button>
      </div>
    </div>
  );
});

Banners.displayName = "Banners";
