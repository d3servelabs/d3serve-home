"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import Globe from "../../../../public/globe.png";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export type LabsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Labs: ForwardRefExoticComponent<LabsProps> = forwardRef<
  HTMLDivElement,
  LabsProps
>(function Labs(
  { className, ...rest }: LabsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-8 md:gap-16 w-full text-center items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-center text-4xl font-bold md:text-6xl" level={2}>
        D3Serve Labs + ICANN
      </Heading>
      <div className="flex w-full max-w-7xl items-center justify-center text-center text-base leading-7 text-white/60 md:text-xl md:leading-9">
        D3Serve Labs is now an ICANN-accredited registrar providing enhanced
        legitimacy and trust, access to a wider range of domain names and better
        pricing, increased security and protection, and easy transfer of domain
        names to and from Namefi.
      </div>

      <div className="relative mt-4 flex h-[133px] w-full items-start justify-center overflow-hidden md:mt-20 md:h-[448px]">
        <div className="glob-pulse w-full max-w-6xl">
          <ImageWithFallback
            width={1448}
            height={1432}
            src={Globe}
            className="glob-rotation h-auto w-full "
            alt="3Serve Labs + ICANN"
          />
        </div>
      </div>
    </div>
  );
});

Labs.displayName = "Labs";
