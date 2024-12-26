"use client";

import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type WithoutForwardRefProps = HTMLAttributes<HTMLDivElement>;

export const WithoutForwardRef: FC<WithoutForwardRefProps> = ({
  className,
  ...rest
}: WithoutForwardRefProps) => {
  return (
    <div className={cn("", className)} {...rest}>
      WithoutForwardRef
    </div>
  );
};

WithoutForwardRef.displayName = "WithoutForwardRef";
