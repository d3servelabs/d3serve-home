"use client";

import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/utils/cn";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: ForwardedRef<HTMLTextAreaElement>;
};

export const TextArea: ForwardRefExoticComponent<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(function TextArea(
  { className, ...rest }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return <textarea ref={ref} className={cn("", className)} {...rest} />;
});

TextArea.displayName = "TextArea";
