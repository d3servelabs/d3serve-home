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
      <SvgLogotypeLine className="h-8 w-52" />
    </Link>
  );
});

Logotype.displayName = "Logotype";
