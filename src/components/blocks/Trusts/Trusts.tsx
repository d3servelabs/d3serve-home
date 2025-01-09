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
import { useTrackers } from "@/contexts/trackers";
import { EVENTS } from "@/constants";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export type TrustsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

type Item = {
  button: string;
  title: string;
  description?: ReactNode;
  image?: string;
  link?: string;
  more?: boolean;
};

const items: Item[] = [
  {
    button: "Loss-less-ness",
    title: "Loss-less-ness",
    description: (
      <div>
        One of the most transformative aspects of digitizing trust is its
        ability to propagate and execute with loss-less precision. Just as
        digitized information can be transmitted without degradation, ensuring
        accuracy and consistency regardless of the number of times it&#39;s
        replicated or shared, digital trust operates with a similar
        meticulousness. Every instance, every transaction, every validation
        retains its original integrity. This mirrors the exactness we&#39;ve
        come to expect from our digital information systems. In essence, the
        digitization of trust eliminates the ambiguity and variability that can
        plague analog systems, paving the way for a future where trust is as
        reliable and consistent as any piece of digital data.
      </div>
    ),
    image: "/trusts/loss-less-ness.png",
    link: "https://example.com",
    more: true,
  },
  {
    button: "Cost Reduction",
    title: "Cost Reduction",
    description: (
      <div>
        Furthermore, the economic implications of digitizing trust cannot be
        understated.
        <br />
        <br />
        Just as digital information reduced the costs associated with printing,
        storage, and distribution, digital trust promises significant savings in
        its replication and dissemination. Traditional trust systems often
        involve layers of intermediaries, each adding their own costs and
        potential points of failure. In contrast, a digitized trust system
        minimizes these layers, streamlining the chain of propagation. By
        reducing the friction and overheads in trust verification and validation
        processes, businesses and individuals can expect not just faster, but
        also far more cost-effective trust-related transactions.
        <br />
        <br />
        This could lead to substantial economic benefits, as funds previously
        allocated to these processes can be redirected to more productive
        ventures.
      </div>
    ),
    image: "/trusts/cost-reduction.png",
    link: "https://example.com",
    more: true,
  },
  {
    button: "Automatability",
    title: "Automatability",
    description: (
      <div>
        Another monumental advantage of digital trust is its inherent
        automatability. In a world where trust is digitized, processes that once
        required manual verification, nuanced judgment, or human intervention
        can be streamlined and automated with software. This doesn&#39;t just
        lead to faster operations; it ensures a level of consistency and
        accuracy unattainable by human standards. Just as digitized information
        paved the way for algorithms to sift through vast amounts of data,
        analyze patterns, and make decisions in split seconds, digital trust
        will empower systems to autonomously establish, verify, and act upon
        trust-related parameters. This automation can reduce errors, increase
        efficiency, and unlock potentials in sectors where the speed and
        precision of trust decisions are paramount.
      </div>
    ),
    image: "/trusts/automatability.png",
    link: "https://example.com",
    more: true,
  },
  {
    button: "New use-cases",
    title: "New use-case enabled by Digital Trust",
    description: (
      <div>
        The real-world applications unlocked by digitized trust offer a glimpse
        into a transformative future. Take, for instance, the concept of
        &#34;group trust.&#34; Traditional systems struggle with efficiently
        establishing trust for groups due to the complexities and nuances of
        interpersonal relationships and hierarchies. With digital trust,
        innovative applications such as distributing assets to a designated
        group based on collective criteria or implementing access controls
        predicated on group dynamics become not only feasible but efficient.
        Imagine a scenario where an inheritance is seamlessly and transparently
        divided among a family group based on predefined trust metrics, or a
        secure facility that grants access based on the collective
        trustworthiness of a team rather than individual credentials.
        <br />
        <br />
        These are just a couple of examples, but they underline the vast
        potential of applications that were previously inconceivable or highly
        impractical before the advent of digitized trust.
      </div>
    ),
    image: "/trusts/new-use-cases.png",
    link: "https://example.com",
    more: true,
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
  const [mores, setMores] = useState<Record<string, boolean>>({});

  const { trackers } = useTrackers();

  const handleActive = useCallback(
    (item: Item) => async () => {
      setActive(item);

      await trackers(EVENTS.TRUSTS_FILTER_CLICK, { item: item.title });
    },
    [trackers],
  );

  const handleMore = useCallback(
    (item: Item) => async () => {
      if (item.more) {
        setMores((prev) => ({ ...prev, [item.title]: !prev[item.title] }));
      } else if (item.link) {
        window.open(item.link, "_blank");
      }

      await trackers(EVENTS.TRUSTS_MORE_CLICK, { item: item.title });
    },
    [trackers],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-6 md:gap-12 w-full items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-center text-4xl font-bold md:text-6xl" level={2}>
        Why digital trust
      </Heading>

      <div className="mt-2 flex w-full max-w-7xl items-center justify-center text-center text-base leading-7 text-white/60 md:mt-4 md:text-xl md:leading-9">
        D3Serve Labs has been trusted by leading institutions and companies.
      </div>

      <div className="hide-scrollbar w-full max-w-full overflow-x-auto overflow-y-hidden text-center">
        <div className="mx-auto inline-flex flex-nowrap items-center gap-2">
          {items.map((item) => (
            <Button
              key={item.title}
              size="md"
              variant={item.title === active.title ? "primary" : "secondary"}
              onClick={handleActive(item)}
              className="text-lg md:text-xl"
            >
              {item.button}
            </Button>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.07) 100%)",
        }}
        className="flex w-full max-w-[1472px] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur-[100px] md:flex-row md:gap-8 md:p-8"
      >
        {active.image && (
          <div className="flex w-full flex-col items-center justify-center p-2 md:p-4">
            <ImageWithFallback
              src={active.image}
              alt={active.title}
              width={1024}
              height={768}
              className="size-full h-80 max-h-80 min-h-80 max-w-full object-cover object-center md:object-contain"
            />
          </div>
        )}
        <div className="flex w-full flex-col gap-4 p-2 md:gap-8 md:p-4">
          {active.title && (
            <Heading className="text-3xl font-bold" level={3}>
              {active.title}
            </Heading>
          )}
          {active.description && (
            <div
              className={cn(
                "line-clamp-5 w-full break-words text-base leading-7 text-white/45 md:text-xl md:leading-9",
                mores[active.title] && "line-clamp-none",
              )}
            >
              {active.description}
            </div>
          )}

          {active.link && (
            <div>
              <button
                onClick={handleMore(active)}
                className="group text-white/45 transition-all duration-150 hover:scale-105 hover:text-white active:scale-[99%]"
              >
                {mores[active.title] ? "Read less" : "Read more"}
                <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Trusts.displayName = "Trusts";
