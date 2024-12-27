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
import Image from "next/image";

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
        "flex flex-col gap-8 w-full text-center items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-6xl font-bold" level={2}>
        D3Serve Labs + ICANN
      </Heading>
      <div className="w-full text-white/70 text-2xl flex items-center text-center justify-center">
        D3Serve Labs is now an ICANN-accredited registrar providing enhanced
        legitimacy and trust, access to a wider range of domain names and better
        pricing, increased security and protection, and easy transfer of domain
        names to and from Namefi.
      </div>

      <div className="w-full h-[400px] mt-16 overflow-hidden flex justify-center items-start relative">
        <Image
          width={1448}
          height={1432}
          src={Globe}
          alt="3Serve Labs + ICANN"
        />
      </div>
    </div>
  );
});

Labs.displayName = "Labs";
