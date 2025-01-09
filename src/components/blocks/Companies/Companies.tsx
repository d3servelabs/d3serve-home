"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { useTrackers } from "@/contexts/trackers";
import { BRANDS, EVENTS } from "@/constants";
import { ImageWithFallback } from "@/components/ImageWithFallback";

enum Tag {
  ALL = "All",
  INVESTORS = "Investors",
  GRANTORS = "Grantors",
  PARTNERS = "Partners",
}

type Item = {
  tags: Tag[];
  name: string;
  images: string[];
  link: string;
};

const items: Item[] = [
  ...BRANDS.Investors.map((brand) => ({
    tags: [Tag.INVESTORS],
    name: brand.name,
    images: brand.images,
    link: brand.link,
  })),
  ...BRANDS.Grantors.map((brand) => ({
    tags: [Tag.GRANTORS],
    name: brand.name,
    images: brand.images,
    link: brand.link,
  })),
  ...BRANDS.Partners.map((brand) => ({
    tags: [Tag.PARTNERS],
    name: brand.name,
    images: brand.images,
    link: brand.link,
  })),
];

export type CompaniesProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Companies: ForwardRefExoticComponent<CompaniesProps> = forwardRef<
  HTMLDivElement,
  CompaniesProps
>(function Companies(
  { className, ...rest }: CompaniesProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [tags] = useState<Tag[]>([
    Tag.ALL,
    Tag.INVESTORS,
    Tag.GRANTORS,
    Tag.PARTNERS,
  ]);
  const [active, setActive] = useState<Tag>(Tag.ALL);

  const filters = useMemo(
    () =>
      active === Tag.ALL
        ? items
        : items.filter((item) => item.tags.includes(active)),
    [active],
  );

  const { trackers } = useTrackers();

  const handleActive = useCallback(
    (tag: Tag) => async () => {
      setActive(tag);

      await trackers(EVENTS.COMPANIES_FILTER_CLICK, { tag });
    },
    [trackers],
  );

  const handleItemClick = useCallback(
    (item: Item) => async () => {
      await trackers(EVENTS.COMPANIES_ITEM_CLICK, {
        item: item.name,
      });
    },
    [trackers],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-12 w-full text-center items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading
        className="text-center text-4xl font-bold md:text-6xl "
        level={2}
      >
        Backed by the best
      </Heading>
      <div className="mt-4 flex w-full max-w-7xl items-center justify-center text-center text-base leading-7 text-white/60 md:text-xl md:leading-9">
        D3Serve Labs has been trusted by leading institutions and companies.
      </div>
      <div className="hide-scrollbar w-full max-w-full overflow-x-auto overflow-y-hidden text-center">
        <div className="mx-auto inline-flex flex-nowrap items-center gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={tag === active ? "primary" : "secondary"}
              className={cn(
                "px-8 text-base md:text-lg",
                tag === active ? "" : "bg-white/25",
              )}
              onClick={handleActive(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <motion.div
        layout
        className="mt-6 grid w-full grid-cols-2 gap-0 md:mt-12 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filters.map((item, index) => {
            return (
              <motion.a
                href={item.link}
                target="_blank"
                onClick={handleItemClick(item)}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                title={item.name}
                className="flex w-full items-center justify-center p-2 md:p-4"
                key={index}
              >
                <ImageWithFallback
                  alt={item.name}
                  width="180"
                  height="48"
                  src={item.images[0]}
                  className="scale-75 grayscale transition-all duration-150 ease-in-out hover:scale-105 hover:grayscale-0 md:scale-100"
                />
                {item.name && <span className="sr-only">{item.name}</span>}
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

Companies.displayName = "Companies";
