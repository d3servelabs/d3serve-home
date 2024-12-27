"use client";

import type { ReactNode } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

type Props = { children: ReactNode };

export const AnalyticsProvider = ({ children, ...rest }: Readonly<Props>) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      {children}
    </>
  );
};
