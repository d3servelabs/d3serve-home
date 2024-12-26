"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

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
    <div ref={ref} className={cn("", className)} {...rest}>
      Products
    </div>
  );
});

Products.displayName = "Products";
