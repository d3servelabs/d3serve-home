"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Loader2Icon } from "lucide-react";

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  loading?: boolean;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Loader: ForwardRefExoticComponent<LoaderProps> = forwardRef<
  HTMLDivElement,
  LoaderProps
>(function Loader(
  {
    disabled = false,
    loading = false,
    className,
    children,
    ...rest
  }: LoaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  if (!loading) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 flex items-center justify-center gap-1.5 bg-black/50",
        disabled && "opacity-95 cursor-not-allowed",

        className,
      )}
      {...rest}
    >
      <Loader2Icon className="size-4 animate-spin" />
      {children || "Loading..."}
    </div>
  );
});

Loader.displayName = "Loader";
