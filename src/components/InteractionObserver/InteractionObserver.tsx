"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useEffect,
  useState,
} from "react";
import { cn } from "@/utils/cn";

export type InteractionObserverProps = HTMLAttributes<HTMLDivElement> & {
  onInteraction?: (type: string, event: Event) => void;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const InteractionObserver: ForwardRefExoticComponent<InteractionObserverProps> =
  forwardRef<HTMLDivElement, InteractionObserverProps>(
    function InteractionObserver(
      { onInteraction, className, children, ...rest }: InteractionObserverProps,
      ref: ForwardedRef<HTMLDivElement>,
    ) {
      const [interaction, setInteraction] = useState(false);

      useEffect(() => {
        const handle = (event: Event) => {
          setInteraction(true);
          onInteraction?.(event.type, event);
        };

        const types = ["click", "mousemove", "keydown", "scroll", "touchstart"];

        types.forEach((type) => {
          window.addEventListener(type, handle);
        });

        return () => {
          types.forEach((type) => {
            window.removeEventListener(type, handle);
          });
        };
      }, [onInteraction]);

      return (
        <div ref={ref} className={cn("", className)} {...rest}>
          {interaction ? children : " "}
        </div>
      );
    },
  );

InteractionObserver.displayName = "InteractionObserver";
