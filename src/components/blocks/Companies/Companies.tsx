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
import * as companies from "@/components/icons/companies";

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
      <div className="mt-12 flex w-full items-center justify-center text-center text-2xl text-white/70">
        D3Serve Labs has been trusted by leading institutions and companies.
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" className="text-lg">
          All
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          Investors
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          Grantors
        </Button>
        <Button size="sm" variant="secondary" className="text-lg">
          Partners
        </Button>
      </div>
      <div className="mt-16 grid w-full grid-cols-4 gap-6">
        {Object.entries(companies).map(([name, Icon]) => (
          <div
            className="flex w-full items-center justify-center p-6"
            key={name}
          >
            <Icon className="transition-all duration-150 ease-in-out hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
});

Companies.displayName = "Companies";
