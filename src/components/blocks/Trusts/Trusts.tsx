"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";
import Link from "next/link";
import Image from "next/image";
import { useTrackers } from "@/contexts/trackers";
import { EVENTS } from "@/constants";

export type TrustsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

type Item = {
  title: string;
  description?: ReactNode;
  image?: string;
  link?: string;
};

const items: Item[] = [
  {
    title: "Loss-less-ness",
    description: `One of the most transformative aspects of digitizing trust is its ability to propagate and execute with loss-less precision.
Just as digitized information can be transmitted without degradation, ensuring accuracy and consistency regardless of the number of times it's replicated or shared, digital trust operates with a similar meticulousness. Every instance, every transaction, every validation retains its original integrity. This mirrors the exactness we've come to expect from our digital information systems.
In essence, the digitization of trust eliminates the ambiguity and variability that can plague analog systems, paving the way for a future where trust is as reliable and consistent as any piece of digital data.`,
    image: "/trusts/loss-less-ness.png",
    link: "https://example.com",
  },
  {
    title: "Cost Reduction",
    description: `One of the most transformative aspects of digitizing trust is its ability to propagate and execute with loss-less precision.
Just as digitized information can be transmitted without degradation, ensuring accuracy and consistency regardless of the number of times it's replicated or shared, digital trust operates with a similar meticulousness. Every instance, every transaction, every validation retains its original integrity. This mirrors the exactness we've come to expect from our digital information systems.
In essence, the digitization of trust eliminates the ambiguity and variability that can plague analog systems, paving the way for a future where trust is as reliable and consistent as any piece of digital data.`,
    image: "/trusts/cost-reduction.png",
    link: "https://example.com",
  },
  {
    title: "Automatability",
    description: `One of the most transformative aspects of digitizing trust is its ability to propagate and execute with loss-less precision.
Just as digitized information can be transmitted without degradation, ensuring accuracy and consistency regardless of the number of times it's replicated or shared, digital trust operates with a similar meticulousness. Every instance, every transaction, every validation retains its original integrity. This mirrors the exactness we've come to expect from our digital information systems.
In essence, the digitization of trust eliminates the ambiguity and variability that can plague analog systems, paving the way for a future where trust is as reliable and consistent as any piece of digital data.`,
    image: "/trusts/automatability.png",
    link: "https://example.com",
  },
  {
    title: "New use-cases",
    description: `One of the most transformative aspects of digitizing trust is its ability to propagate and execute with loss-less precision.
Just as digitized information can be transmitted without degradation, ensuring accuracy and consistency regardless of the number of times it's replicated or shared, digital trust operates with a similar meticulousness. Every instance, every transaction, every validation retains its original integrity. This mirrors the exactness we've come to expect from our digital information systems.
In essence, the digitization of trust eliminates the ambiguity and variability that can plague analog systems, paving the way for a future where trust is as reliable and consistent as any piece of digital data.`,
    image: "/trusts/new-use-cases.png",
    link: "https://example.com",
  },
];

export const Trusts: ForwardRefExoticComponent<TrustsProps> = forwardRef<
  HTMLDivElement,
  TrustsProps
>(function Trusts(
  { className, ...rest }: TrustsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [active, setActive] = useState<Item>(items[0]);

  const { trackers } = useTrackers();

  const handleActive = useCallback(
    (item: Item) => async () => {
      setActive(item);

      await trackers(EVENTS.TRUSTS_FILTER_CLICK, { item: item.title });
    },
    [trackers],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-12 w-full items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-center text-4xl font-bold md:text-6xl" level={2}>
        Why digital trust
      </Heading>

      <div className="mt-4 flex w-full max-w-7xl items-center justify-center text-center text-base leading-7 text-white/60 md:text-xl md:leading-9">
        D3Serve Labs has been trusted by leading institutions and companies.
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item) => (
          <Button
            key={item.title}
            size="md"
            variant={item === active ? "primary" : "secondary"}
            onClick={handleActive(item)}
          >
            {item.title}
          </Button>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-8 rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-[100px] md:flex-row">
        {active.image && (
          <div className="flex w-full flex-col items-center justify-center p-4">
            <Image
              src={active.image}
              alt={active.title}
              width={1024}
              height={768}
              className="size-full max-h-80 max-w-full object-contain"
            />
          </div>
        )}
        <div className="flex w-full flex-col gap-8 p-4">
          {active.title && (
            <Heading className="text-3xl font-bold" level={3}>
              {active.title}
            </Heading>
          )}
          {active.description && (
            <div className="line-clamp-6 w-full break-words text-base leading-7 text-white/60 md:text-xl md:leading-9">
              {active.description}
            </div>
          )}

          {active.link && (
            <div>
              <Link
                href={active.link}
                target="_blank"
                className="group text-white/40 transition-all duration-150 hover:scale-105 hover:text-white active:scale-[99%]"
              >
                Read more
                <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Trusts.displayName = "Trusts";
