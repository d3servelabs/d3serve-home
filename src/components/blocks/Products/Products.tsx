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
import { PRODUCTS } from "@/constants";

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
      <div className="flex w-full items-center justify-center text-center text-2xl text-white/70">
        Discover cutting-edge tools and solutions to trade, manage, and transfer
        your onchain domains seamlessly.
      </div>

      <div className="mt-8 flex w-full flex-col gap-8">
        <BackgroundGradient className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-white/20 px-12 py-8 text-center">
          <Link
            href={PRODUCTS.NAMEFI}
            target="_blank"
            className="relative flex w-full items-center justify-center gap-4 text-center text-4xl font-bold text-white transition-all duration-150 hover:scale-105"
          >
            <SvgNamefi className="size-20" />
            Namefi
          </Link>
          <div className="relative text-2xl text-white/50">
            Tokenize internet domains for trading, DeFi and Future Internet
          </div>
          <div className="relative">
            <Link
              href={PRODUCTS.NAMEFI}
              target="_blank"
              className="group text-sm text-white/40 transition-all duration-150 hover:scale-105 active:scale-[99%]"
            >
              Learn more
              <SvgArrowRight className="ml-2 inline-flex size-3 transition-all duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </BackgroundGradient>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <BackgroundGradient className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-white/20 px-12 py-8 text-center">
            <Link
              href={PRODUCTS.D3CARDS}
              target="_blank"
              className="relative  flex w-full items-center justify-center gap-4 text-center text-4xl font-bold text-white transition-all duration-150 hover:scale-105"
            >
              <SvgD3Cards className="size-20" />
              D3.cards
            </Link>
            <div className="relative text-2xl text-white/50">
              Tokenize internet domains for trading, DeFi and Future Internet
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-white/20 px-12 py-8 text-center">
            <Link
              href={PRODUCTS.D3CAF}
              target="_blank"
              className="relative flex w-full items-center justify-center gap-4 text-center text-4xl font-bold text-white transition-all duration-150 hover:scale-105"
            >
              <SvgD3Caf className="size-20" />
              D3CAF
            </Link>
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
