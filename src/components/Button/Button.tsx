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
  "tracking-widest inline-flex items-center leading-none text-center justify-center rounded-full duration-150 transition-all disabled:opacity-90 disabled:cursor-not-allowed hover:scale-[101%] active:scale-[99%]",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border border-white hover:bg-black hover:text-white",
        secondary:
          "bg-white/10 text-white border border-transparent hover:bg-white hover:text-black hover:border-white",
        tertiary:
          "border-white text-white border hover:bg-white hover:text-black",
        quaternary:
          "bg-white/5 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.5)] border border-white/50 hover:shadow-[inset_0px_0px_25px_0px_rgba(255,255,255,0.75)]",
        link: "hover:underline",
      },
      size: {
        sm: "py-2 px-4 h-10",
        md: "py-4 px-8 text-xl h-12",
        lg: "py-6 px-8 text-xl h-16",
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
      () => cn("", variants({ variant, size, disabled }), className),
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
