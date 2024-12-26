"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type SocialProps = HTMLAttributes<HTMLDivElement> & {
  discord?: string;
  twitter?: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Social: ForwardRefExoticComponent<SocialProps> = forwardRef<
  HTMLDivElement,
  SocialProps
>(function Social(
  { className, ...rest }: SocialProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Social
    </div>
  );
});

Social.displayName = "Social";
