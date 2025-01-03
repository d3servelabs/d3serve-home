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
import SvgLogotypeLine from "@/components/icons/LogotypeLine";
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
    <Link
      href={href}
      ref={ref}
      className={cn(
        "transition-all duration-150 ease-in-out hover:scale-[101%]",
        className,
      )}
      {...rest}
    >
      <SvgLogotypeLine className="hidden h-8 w-[205px] md:block" />
      <SvgLogotypeSquare className="block size-8 md:hidden" />
    </Link>
  );
});

Logotype.displayName = "Logotype";
