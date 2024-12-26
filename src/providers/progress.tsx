"use client";

import type { ReactNode } from "react";
import type { ProgressBarProps } from "next-nprogress-bar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type Props = ProgressBarProps & { children: ReactNode };

export const ProgressProvider = ({ children, ...rest }: Readonly<Props>) => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#ffffff"
        options={{ showSpinner: false }}
        {...rest}
        shallowRouting
      />
      {children}
    </>
  );
};
