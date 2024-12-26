"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type TemplateProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Template: ForwardRefExoticComponent<TemplateProps> = forwardRef<
  HTMLDivElement,
  TemplateProps
>(function Template(
  { className, ...rest }: TemplateProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Template
    </div>
  );
});

Template.displayName = "Template";
