"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import { Loader2Icon } from "lucide-react";

export type LoadingProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  loading?: boolean;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Loading: ForwardRefExoticComponent<LoadingProps> = forwardRef<
  HTMLDivElement,
  LoadingProps
>(function Loading(
  {
    disabled = false,
    loading = false,
    className,
    children,
    ...rest
  }: LoadingProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  if (!loading) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center gap-1.5",
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

Loading.displayName = "Loading";
