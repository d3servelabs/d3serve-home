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
  "inline-flex items-center justify-center whitespace-nowrap text-nowrap rounded-full text-center leading-none tracking-widest transition-all duration-150 hover:scale-[101%] active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "border border-white bg-white text-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black",
        secondary:
          "border border-transparent bg-white/10 text-white hover:border-white hover:bg-white hover:text-black disabled:hover:border-transparent disabled:hover:bg-white/10 disabled:hover:text-white",
        tertiary:
          "border border-white text-white hover:bg-white hover:text-black disabled:hover:bg-transparent disabled:hover:text-white",
        quaternary:
          "border border-white/50 bg-white/5 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_25px_0px_rgba(255,255,255,0.75)] disabled:hover:shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.5)]",
        destructive:
          "border border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive disabled:hover:bg-transparent disabled:hover:text-destructive",
        link: "hover:underline",
      },
      size: {
        sm: "h-10 px-4 py-2",
        md: "h-12 px-8 py-4 text-xl",
        lg: "h-16 px-8 py-6 text-xl",
      },
      disabled: {
        true: "cursor-not-allowed opacity-90",
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
      () =>
        cn(
          "",
          variants({ variant, size, disabled }),
          loading && "cursor-wait disabled:cursor-wait",
          className,
        ),
      [className, disabled, loading, size, variant],
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
        <span
          className={cn(
            loading && "invisible",
            "flex w-full items-center text-center justify-center leading-none",
          )}
        >
          {children}
        </span>
        {loading && <Loader2Icon className="absolute animate-spin" />}
      </button>
    );
  },
);

Button.displayName = "Button";
