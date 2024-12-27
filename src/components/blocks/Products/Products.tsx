"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";
import SvgNamefi from "@/components/icons/products/Namefi";
import SvgD3Cards from "@/components/icons/products/D3Cards";
import SvgD3Caf from "@/components/icons/products/D3Caf";
import { BackgroundGradient } from "@/components/BackgroundGradient";

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
        Explore Our Products
      </Heading>
      <div className="w-full text-white/70 text-2xl flex items-center text-center justify-center">
        Discover cutting-edge tools and solutions to trade, manage, and transfer
        your onchain domains seamlessly.
      </div>

      <div className="mt-8 flex gap-8 flex-col w-full">
        <BackgroundGradient className="w-full rounded-3xl overflow-hidden border border-white/20 flex flex-col gap-8 py-8 px-12 items-center justify-center text-center">
          <div className="relative w-full flex items-center text-white justify-center text-center font-bold text-4xl gap-4">
            <SvgNamefi className="size-20" />
            Namefi
          </div>
          <div className="relative text-2xl text-white/50">
            Tokenize internet domains for trading, DeFi and Future Internet
          </div>
          <div className="relative">
            <Link
              href="https://example.com"
              target="_blank"
              className="text-white/40 text-sm duration-150 transition-all group hover:scale-105 active:scale-[99%]"
            >
              Learn more
              <SvgArrowRight className="size-3 ml-2 inline-flex duration-150 transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </BackgroundGradient>

        <div className="grid grid-cols-2 gap-8 w-full">
          <BackgroundGradient className="w-full rounded-3xl overflow-hidden border border-white/20 flex flex-col gap-8 py-8 px-12 items-center justify-center text-center">
            <div className="relative w-full flex items-center text-white justify-center text-center font-bold text-4xl gap-4">
              <SvgD3Cards className="size-20" />
              D3.cards
            </div>
            <div className="relative text-2xl text-white/50">
              Tokenize internet domains for trading, DeFi and Future Internet
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="w-full rounded-3xl overflow-hidden border border-white/20 flex flex-col gap-8 py-8 px-12 items-center justify-center text-center">
            <div className="relative w-full flex items-center text-white justify-center text-center font-bold text-4xl gap-4">
              <SvgD3Caf className="size-20" />
              D3CAF
            </div>
            <div className="relative text-2xl text-white/50">
              Tokenize internet domains for trading, DeFi and Future Internet
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
});

Products.displayName = "Products";
