import {
  HTMLAttributes,
  forwardRef,
  ElementType,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type HeadingProps = HTMLAttributes<HTMLElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  ref?: ForwardedRef<HTMLElement>;
};

export const Heading: ForwardRefExoticComponent<HeadingProps> = forwardRef<
  HTMLElement,
  HeadingProps
>(function Heading(
  { level = 1, className, children, ...rest }: HeadingProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const Component = `h${level}` as ElementType;
  return (
    <Component ref={ref} className={cn("", className)} {...rest}>
      {children}
    </Component>
  );
});

Heading.displayName = "Heading";
