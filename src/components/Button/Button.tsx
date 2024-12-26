import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributeAnchorTarget,
  Ref,
  useMemo,
} from "react";
import { cn } from "@/utils/cn";
import { Loader2Icon } from "lucide-react";
import type { UrlObject } from "url";

const variants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200",
        tertiary:
          "bg-transparent text-blue-500 hover:underline focus:ring-blue-500",
        link: "text-blue-500 underline hover:text-blue-600 focus:ring-blue-500",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      disabled: {
        true: "opacity-90 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string | UrlObject;
    target?: HTMLAttributeAnchorTarget;
    loading?: boolean;
  } & VariantProps<typeof variants>;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      href,
      target,
      loading,
      variant,
      size,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const classes = useMemo(
      () => cn(variants({ variant, size, disabled }), className),
      [className, disabled, size, variant],
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          target={target}
          className={classes}
          aria-disabled={!!(disabled || loading)}
          {...rest}
        >
          <span className={cn(loading && "invisible")}>{children}</span>
          {loading && <Loader2Icon className="absolute animate-spin" />}
        </Link>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={classes}
        disabled={!!(disabled || loading)}
        aria-disabled={!!(disabled || loading)}
        {...rest}
      >
        <span className={cn(loading && "invisible")}>{children}</span>
        {loading && <Loader2Icon className="absolute animate-spin" />}
      </button>
    );
  },
);

Button.displayName = "Button";
