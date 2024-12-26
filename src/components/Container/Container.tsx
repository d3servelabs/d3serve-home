import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Container: ForwardRefExoticComponent<ContainerProps> = forwardRef<
  HTMLDivElement,
  ContainerProps
>(function Container(
  { className, children, ...rest }: ContainerProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn("max-w-[1600px] mx-auto w-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";
