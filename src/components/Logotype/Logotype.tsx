import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  HTMLAttributeAnchorTarget,
} from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import type { UrlObject } from "url";
import SvgLogotypeSquare from "@/components/icons/LogotypeSquare";

export type LogotypeProps = HTMLAttributes<HTMLAnchorElement> & {
  href?: string | UrlObject;
  target?: HTMLAttributeAnchorTarget;
  ref?: ForwardedRef<HTMLAnchorElement>;
};

export const Logotype: ForwardRefExoticComponent<LogotypeProps> = forwardRef<
  HTMLAnchorElement,
  LogotypeProps
>(function Logotype(
  { href = "/", className, ...rest }: LogotypeProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Link href={href} ref={ref} className={cn("", className)} {...rest}>
      <SvgLogotypeSquare />
    </Link>
  );
});

Logotype.displayName = "Logotype";
