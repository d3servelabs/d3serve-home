"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";
import Link from "next/link";
import Icon from "../../../../public/loss-less-ness.png";
import Image from "next/image";

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
        "flex flex-col gap-8 w-full items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-6xl font-bold" level={2}>
        Why digital trust
      </Heading>

      <div className="flex items-center gap-2">
        <Button size="sm" className="text-lg">
          Loss-less-ness
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          Cost Reduction
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          Automatability
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          New use-cases
        </Button>
      </div>

      <div className="flex w-full items-center gap-8">
        <div className="flex w-full flex-col gap-8 p-8">
          <Image src={Icon} alt="Why digital trust" width={1080} height={764} />
        </div>
        <div className="flex w-full flex-col gap-8 p-8">
          <Heading className="text-3xl font-bold" level={3}>
            Loss-less-ness
          </Heading>
          <div className="flex w-full text-xl text-white/70">
            One of the most transformative aspects of digitizing trust is its
            ability to propagate and execute with loss-less precision. Just as
            digitized information can be transmitted without degradation,
            ensuring accuracy and consistency regardless of the number of times
            it&#39;s replicated or shared, digital trust operates with a similar
            meticulousness. Every instance, every transaction, every validation
            retains its original integrity. This mirrors the exactness we&#39;ve
            come to expect from our digital information systems. In essence, the
            digitization of trust eliminates the ambiguity and variability that
            can plague analog systems, paving the way for a future where trust
            is as reliable and consistent as any piece of digital data.
          </div>

          <div>
            <Link
              href="https://example.com"
              target="_blank"
              className="group text-sm text-white/40 transition-all duration-150 hover:scale-105 active:scale-[99%]"
            >
              Read more
              <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Trusts.displayName = "Trusts";
