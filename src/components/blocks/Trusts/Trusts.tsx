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

      <div className="flex items-center w-full gap-8">
        <div className="flex flex-col w-full gap-8 p-8">
          <Image src={Icon} alt="Why digital trust" width={1080} height={764} />
        </div>
        <div className="flex flex-col w-full gap-8 p-8">
          <Heading className="text-3xl font-bold" level={3}>
            Loss-less-ness
          </Heading>
          <div className="w-full text-white/70 text-xl flex">
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
              className="text-white/40 text-sm duration-150 transition-all group hover:scale-105 active:scale-[99%]"
            >
              Read more
              <SvgArrowRight className="size-3 ml-2 inline-flex duration-150 transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Trusts.displayName = "Trusts";
