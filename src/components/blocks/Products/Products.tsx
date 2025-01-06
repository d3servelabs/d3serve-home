"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";
import SvgNamefi2 from "@/components/icons/products/Namefi2";
import SvgD3Cards from "@/components/icons/products/D3Cards";
import SvgD3Caf from "@/components/icons/products/D3Caf";
import { EVENTS, PRODUCTS } from "@/constants";
import { Noise } from "@/components/Noise";
import SvgProduct1GradientLeft from "@/components/icons/gradients/Product1GradientLeft";
import SvgProduct1GradientRight from "@/components/icons/gradients/Product1GradientRight";
import SvgProduct2GradientLeft from "@/components/icons/gradients/Product2GradientLeft";
import SvgProduct3GradientRight from "@/components/icons/gradients/Product3GradientRight";
import { useTrackers } from "@/contexts/trackers";

export type ProductsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Products: ForwardRefExoticComponent<ProductsProps> = forwardRef<
  HTMLDivElement,
  ProductsProps
>(function Products(
  { className, ...rest }: ProductsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { trackers } = useTrackers();

  const handleItemClick = useCallback(
    (item: (typeof PRODUCTS)[keyof typeof PRODUCTS]) => async () => {
      await trackers(EVENTS.PRODUCTS_ITEM_CLICK, {
        item: item.title,
      });
    },
    [trackers],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4 md:gap-8 w-full text-center items-center justify-center",
        className,
      )}
      {...rest}
    >
      <Heading className="text-center text-4xl font-bold md:text-6xl" level={2}>
        Explore Our Products
      </Heading>
      <div className="flex w-full items-center justify-center text-center text-base leading-7 text-white/60 md:text-xl md:leading-9">
        Discover cutting-edge tools and solutions to trade, manage, and transfer
        your onchain domains seamlessly.
      </div>

      <div className="mt-4 flex w-full flex-col gap-4 md:mt-8 md:gap-8">
        <div
          style={{
            boxShadow:
              "0px 2347px 657px 0px rgba(0, 0, 0, 0.00), 0px 1502px 601px 0px rgba(0, 0, 0, 0.01), 0px 845px 507px 0px rgba(0, 0, 0, 0.05), 0px 375px 375px 0px rgba(0, 0, 0, 0.09), 0px 94px 207px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/20 bg-[#1C2024] px-6 py-4 text-center backdrop-blur-[100px] md:gap-8 md:px-12 md:py-8"
        >
          <div className="pointer-events-none absolute inset-0 size-full">
            <Noise className="absolute inset-0 size-full" />
            <SvgProduct1GradientLeft
              preserveAspectRatio="none"
              className="absolute left-0 h-full"
            />
            <SvgProduct1GradientRight
              preserveAspectRatio="none"
              className="absolute right-0 h-full"
            />
          </div>

          <Link
            onClick={handleItemClick(PRODUCTS.NAMEFI)}
            href={PRODUCTS.NAMEFI.url}
            target="_blank"
            className="relative flex w-full items-center justify-center gap-4 text-center text-2xl font-bold text-white transition-all duration-150 hover:scale-105 md:text-4xl"
          >
            <SvgNamefi2 className="size-14 overflow-hidden rounded-lg md:size-20 md:rounded-2xl" />
            {PRODUCTS.NAMEFI.title}
          </Link>
          <div className="relative leading-7 text-white/60 md:text-xl md:leading-9">
            Tokenize internet domains for tratrding, DeFi and Future Internet
          </div>
          <div className="relative">
            <Link
              onClick={handleItemClick(PRODUCTS.NAMEFI)}
              href={PRODUCTS.NAMEFI.url}
              target="_blank"
              className="group text-sm text-white/40 transition-all duration-150 hover:scale-105 hover:text-white active:scale-[99%]"
            >
              Learn more
              <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div
            style={{
              boxShadow:
                "0px 2347px 657px 0px rgba(0, 0, 0, 0.00), 0px 1502px 601px 0px rgba(0, 0, 0, 0.01), 0px 845px 507px 0px rgba(0, 0, 0, 0.05), 0px 375px 375px 0px rgba(0, 0, 0, 0.09), 0px 94px 207px 0px rgba(0, 0, 0, 0.10)",
            }}
            className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/20 bg-[#1C2024] px-6 py-4 text-center backdrop-blur-[100px] md:gap-8 md:px-12 md:py-8"
          >
            <div className="pointer-events-none absolute inset-0 size-full">
              <Noise className="absolute inset-0 size-full" />
              <SvgProduct2GradientLeft
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-full"
              />
            </div>
            <Link
              onClick={handleItemClick(PRODUCTS.D3CARDS)}
              href={PRODUCTS.D3CARDS.url}
              target="_blank"
              className="relative flex w-full items-center justify-center gap-4 text-center text-2xl font-bold text-white transition-all duration-150 hover:scale-105 md:text-4xl"
            >
              <SvgD3Cards className="size-14 overflow-hidden rounded-lg md:size-20 md:rounded-2xl" />
              {PRODUCTS.D3CARDS.title}
            </Link>
            <div className="relative leading-7 text-white/60 md:text-xl md:leading-9">
              Web3 digital business card with token gated privacy and control
            </div>
            <div className="relative">
              <Link
                onClick={handleItemClick(PRODUCTS.D3CARDS)}
                href={PRODUCTS.D3CARDS.url}
                target="_blank"
                className="group text-sm text-white/40 transition-all duration-150 hover:scale-105 hover:text-white active:scale-[99%]"
              >
                Learn more
                <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div
            style={{
              boxShadow:
                "0px 2347px 657px 0px rgba(0, 0, 0, 0.00), 0px 1502px 601px 0px rgba(0, 0, 0, 0.01), 0px 845px 507px 0px rgba(0, 0, 0, 0.05), 0px 375px 375px 0px rgba(0, 0, 0, 0.09), 0px 94px 207px 0px rgba(0, 0, 0, 0.10)",
            }}
            className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/20 bg-[#1C2024] px-6 py-4 text-center backdrop-blur-[100px] md:gap-8 md:px-12 md:py-8"
          >
            <div className="pointer-events-none absolute inset-0 size-full">
              <Noise className="absolute inset-0 size-full" />
              <SvgProduct3GradientRight
                preserveAspectRatio="none"
                className="absolute bottom-0 right-0 h-full"
              />
            </div>
            <Link
              onClick={handleItemClick(PRODUCTS.D3CAF)}
              href={PRODUCTS.D3CAF.url}
              target="_blank"
              className="relative flex w-full items-center justify-center gap-4 text-center text-2xl font-bold text-white transition-all duration-150 hover:scale-105 md:text-4xl"
            >
              <SvgD3Caf className="size-14 overflow-hidden rounded-lg md:size-20 md:rounded-2xl" />
              {PRODUCTS.D3CAF.title}
            </Link>
            <div className="relative leading-7 text-white/60 md:text-xl md:leading-9">
              Decentralized mining service for mining vanity contract addreses
            </div>
            <div className="relative">
              <Link
                onClick={handleItemClick(PRODUCTS.D3CAF)}
                href={PRODUCTS.D3CAF.url}
                target="_blank"
                className="group text-sm text-white/40 transition-all duration-150 hover:scale-105 hover:text-white active:scale-[99%]"
              >
                Learn more
                <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Products.displayName = "Products";
