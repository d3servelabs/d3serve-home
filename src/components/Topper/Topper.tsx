"use client";

import {
  ButtonHTMLAttributes,
  useRef,
  useCallback,
  useEffect,
  FC,
} from "react";
import { cn } from "@/utils/cn";
import { Triangle } from "lucide-react";

export type TopperProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  offset?: number;
  behavior?: ScrollBehavior;
  innerColor?: string;
  outerColor?: string;
};

export const Topper: FC<TopperProps> = ({
  offset = 50,
  behavior = "smooth",
  innerColor = "#F76808",
  outerColor = "#fff",
  className,
  ...rest
}: TopperProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const path = useRef<SVGPathElement | null>(null);

  const handleClick = useCallback(() => {
    window.document.scrollingElement?.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }, [behavior]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !path.current) return;

      const progress =
        window.scrollY /
        (window.document.body.scrollHeight - window.innerHeight);

      path.current.style.strokeDashoffset = `${307.919 * Math.abs(1 - progress)}`;

      if (window.scrollY > offset) {
        ref.current.classList.add("active");
      } else {
        ref.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <button
      aria-label="To Top"
      ref={ref}
      style={{
        "--to-top-inner-color": innerColor,
        "--to-top-outer-color": outerColor,
      }}
      className={cn("to-top z-30", className)}
      onClick={handleClick}
      {...rest}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        className="circle"
      >
        <path ref={path} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="absolute flex size-full items-center justify-center">
        <Triangle className="size-4" />
      </div>
    </button>
  );
};

Topper.displayName = "Topper";
