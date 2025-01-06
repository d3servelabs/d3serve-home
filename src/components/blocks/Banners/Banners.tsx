"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
} from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/Button";
import SvgStars from "@/components/icons/icons/Stars";
import SvgArrowUpRight from "@/components/icons/icons/ArrowUpRight";
import { TextGradient } from "@/components/TextGradient";
import { Heading } from "@/components/Heading";
import { useTrackers } from "@/contexts/trackers";
import { EVENTS } from "@/constants";

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
  const { trackers } = useTrackers();

  const handleReadManifesto = useCallback(async () => {
    await trackers(EVENTS.READ_MANIFESTO_CLICK);
  }, [trackers]);

  const handlePartnerWithUs = useCallback(async () => {
    await trackers(EVENTS.PARTNER_WITH_US_CLICK);
  }, [trackers]);

  const handleICANNAccreditation = useCallback(async () => {
    await trackers(EVENTS.ICANN_ACCREDITATION_CLICK);
  }, [trackers]);

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
        <Button
          href="https://www.icann.org"
          target="_blank"
          onClick={handleICANNAccreditation}
          variant="quaternary"
          size="sm"
          className="h-10 font-roboto"
        >
          <SvgStars className="mr-2 inline-flex size-5" />
          ICANN Accreditation
        </Button>
      </div>
      <div className="mt-8 flex w-full items-center justify-center text-center font-roboto-mono">
        <TextGradient
          duration={5000}
          colors={[
            "#0091FF 0%",
            "#FFF 25%",
            "#F76808 50%",
            "#FFF 75%",
            "#0091FF 100%",
          ]}
          className="text-[40px] font-bold leading-tight md:text-[80px]"
        >
          <Heading level={1}>
            A Pioneer of <span className="block md:inline">Digital</span>{" "}
            <span className="block md:inline">Trust</span>{" "}
          </Heading>
        </TextGradient>
      </div>
      <div className="flex w-full items-center justify-center text-center text-base leading-7 text-white/60 md:text-xl md:leading-9">
        Building digital trust with blockchain powered software and services.
        Maker of Namefi.io and more
      </div>
      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 text-center md:mt-16 md:gap-8">
        <Button
          onClick={handleReadManifesto}
          href="https://hackmd.io/@d3servelabs/vision"
          target="_blank"
          variant="primary"
          size="lg"
          className="h-[50px] w-60 bg-white/70 text-lg md:h-[60px] md:w-auto md:text-xl"
        >
          Read manifesto
          <SvgArrowUpRight className="ml-2 inline-flex size-6" />
        </Button>
        <Button
          href="mailto:contact@d3serve.xyz"
          target="_blank"
          onClick={handlePartnerWithUs}
          variant="tertiary"
          size="lg"
          className="h-[50px] w-60 text-lg md:h-[60px] md:w-auto md:text-xl"
        >
          Partner with us
        </Button>
      </div>
    </div>
  );
});

Banners.displayName = "Banners";
