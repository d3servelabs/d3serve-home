"use client";

import React, {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import styled, { keyframes } from "styled-components";
import { cn } from "@/utils/cn";

export interface ActionConfettiProps extends HTMLAttributes<HTMLDivElement> {
  primaryColor?: string;
  secondaryColor?: string;
  duration?: number;
  animate?: boolean;
  shape?: "circle" | "square";
  density?: "low" | "medium" | "high";
  trigger?: "click" | "hover" | "none";
}

const topBubblesAnimation = keyframes`
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
        background-position: 0 80%, 0 20%, 10% 40%, 20% 0, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
        background-position: 0 70%, 0 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
    }
`;

const bottomBubblesAnimation = keyframes`
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0;
    }
    50% {
        background-position: 0 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0;
    }
    100% {
        background-position: 0 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
    }
`;

const getShapeGradient = (shape: "circle" | "square", primaryColor: string) => {
  if (shape === "square") {
    return `linear-gradient(to bottom right, ${primaryColor} 0%, ${primaryColor} 100%)`;
  }
  return `radial-gradient(circle, ${primaryColor} 20%, transparent 20%)`;
};

const getDensity = (density: "low" | "medium" | "high") => {
  switch (density) {
    case "low":
      return "5% 5%, 10% 10%, 7% 7%, 10% 10%, 9% 9%, 5% 5%, 7% 7%, 5% 5%, 9% 9%";
    case "medium":
      return "10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%";
    case "high":
      return "15% 15%, 30% 30%, 23% 23%, 30% 30%, 27% 27%, 15% 15%, 23% 23%, 15% 15%, 27% 27%";
  }
};

const Wrapper = styled.div<{
  $primaryColor: string;
  $secondaryColor: string;
  $duration: number;
  $animate: boolean;
  $shape: "circle" | "square";
  $density: "low" | "medium" | "high";
}>`
  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 200%;
    height: 100%;
    left: -50%;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: ${(props) => `
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)}
    `};
    background-size: ${(props) => getDensity(props.$density)};
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: ${(props) => `
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)},
      ${getShapeGradient(props.$shape, props.$secondaryColor)},
      ${getShapeGradient(props.$shape, props.$primaryColor)}
    `};
    background-size: ${(props) => getDensity(props.$density)};
  }

  &.animate:before {
    display: block;
    animation: ${topBubblesAnimation} ease-in-out
      ${(props) => props.$duration}ms forwards;
  }

  &.animate:after {
    display: block;
    animation: ${bottomBubblesAnimation} ease-in-out
      ${(props) => props.$duration}ms forwards;
  }
`;

export const ActionConfetti: ForwardRefExoticComponent<ActionConfettiProps> =
  forwardRef(function ActionConfetti(
    {
      primaryColor = "#0091FF",
      secondaryColor = "#F76808",
      duration = 750,
      animate = false,
      shape = "circle",
      density = "medium",
      trigger = "none",
      className,
      children,
      onClick,
      ...rest
    }: ActionConfettiProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    const [animating, setAnimating] = useState(false);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (trigger === "click") {
          setAnimating(true);
          onClick?.(event);
        }
      },
      [trigger, onClick],
    );

    const handleMouseEnter = useCallback(() => {
      if (trigger === "hover") {
        setAnimating(true);
      }
    }, [trigger]);

    useEffect(() => {
      if (!animating) return;

      const timer = setTimeout(() => {
        setAnimating(false);
      }, duration);

      return () => clearTimeout(timer);
    }, [animating, duration]);

    useEffect(() => {
      if (animate) setAnimating(true);
    }, [animate]);

    return (
      <Wrapper
        $primaryColor={primaryColor}
        $secondaryColor={secondaryColor}
        $duration={duration}
        $animate={animating}
        $shape={shape}
        $density={density}
        ref={ref}
        className={cn(
          "relative inline-block",
          animating && "animate",
          className,
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...rest}
      >
        {children}
      </Wrapper>
    );
  });

ActionConfetti.displayName = "ActionConfetti";
