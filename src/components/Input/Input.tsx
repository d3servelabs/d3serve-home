"use client";

import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  InputHTMLAttributes,
} from "react";
import { cn } from "@/utils/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: ForwardedRef<HTMLInputElement>;
};

export const Input: ForwardRefExoticComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  { className, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={cn("rounded-full bg-white/10", className)}
      {...rest}
    />
  );
});

Input.displayName = "Input";
