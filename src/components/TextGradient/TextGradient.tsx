"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
} from "react";
import { cn } from "@/utils/cn";
import styled, { keyframes } from "styled-components";

type Direction =
  | "to right"
  | "to left"
  | "to top"
  | "to bottom"
  | "to top right"
  | "to top left"
  | "to bottom right"
  | "to bottom left";

export type TextGradientProps = HTMLAttributes<HTMLDivElement> & {
  colors: string[];
  direction?: Direction;
  duration?: number;
  size?: number;
  ref?: ForwardedRef<HTMLDivElement>;
};

const animation = (size: number) => keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: ${size / 2}% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Gradient = styled.div<Omit<TextGradientProps, "text">>`
  background-image: linear-gradient(
    ${(props) => props.direction ?? "to right"},
    ${(props) => props.colors.join(", ")}
  );
  background-size: ${(props) => `${props.size ?? 200}% auto`};
  background-clip: text;
  color: transparent;
  animation: ${(props) => animation(props.size ?? 200)}
    ${(props) => props.duration ?? 3000}ms linear infinite;
`;

export const TextGradient: ForwardRefExoticComponent<TextGradientProps> =
  forwardRef<HTMLDivElement, TextGradientProps>(function TextGradient(
    { className, children, ...rest }: TextGradientProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <Gradient ref={ref} className={cn("", className)} {...rest}>
        {children}
      </Gradient>
    );
  });

TextGradient.displayName = "TextGradient";
