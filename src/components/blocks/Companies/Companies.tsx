"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useState,
  ReactElement,
  SVGProps,
  useMemo,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import * as companies from "@/components/icons/companies";
import { useTrackers } from "@/contexts/trackers";
import { EVENTS } from "@/constants";

enum Tag {
  ALL = "All",
  INVESTORS = "Investors",
  GRANTORS = "Grantors",
  PARTNERS = "Partners",
}

type Item = {
  tags: Tag[];
  title?: string;
  description?: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const items: Item[] = [
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company1,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company2,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company3,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company4,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company5,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company6,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company7,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company8,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company9,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company10,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company11,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company12,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company13,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company14,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company15,
  },
  {
    tags: [Tag.INVESTORS, Tag.GRANTORS, Tag.PARTNERS],
    icon: companies.Company16,
  },
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
        title: item.title,
        description: item.description,
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
      <Heading className="text-6xl font-bold" level={2}>
        Backed by the best
      </Heading>
      <div className="mt-4 flex w-full max-w-7xl items-center justify-center text-center text-xl leading-9 text-white/60">
        D3Serve Labs has been trusted by leading institutions and companies.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tags.map((tag) => (
          <Button
            key={tag}
            size="sm"
            variant={tag === active ? "primary" : "secondary"}
            className={cn("px-8 text-lg", tag === active ? "" : "bg-white/25")}
            onClick={handleActive(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <motion.div
        layout
        className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filters.map((item, index) => {
            const overview = [item.title, item.description]
              .filter(Boolean)
              .join(" - ")
              .trim();

            return (
              <motion.button
                onClick={handleItemClick(item)}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                title={overview}
                className="flex w-full items-center justify-center p-4"
                key={index}
              >
                <item.icon className="transition-all duration-150 ease-in-out hover:scale-105" />
                {overview && <span className="sr-only">{overview}</span>}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

Companies.displayName = "Companies";
