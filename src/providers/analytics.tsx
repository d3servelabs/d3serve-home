"use client";

import type { ReactNode } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

type Props = { children: ReactNode };

export const AnalyticsProvider = ({ children }: Readonly<Props>) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      {children}
    </>
  );
};
