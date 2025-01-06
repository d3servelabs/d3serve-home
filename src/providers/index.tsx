"use client";

import { ReactNode, Suspense } from "react";
import { ProgressProvider } from "./progress";
import { ThemeProvider } from "./theme";
import { ArtifactsProvider } from "@/providers/artifacts";
import { Loading } from "@/components/Loading";
import { AnalyticsProvider } from "@/providers/analytics";

type Props = { children: ReactNode };

export const Providers = ({ children }: Readonly<Props>) => {
  return (
    <Suspense fallback={<Loading />}>
      <ProgressProvider>
        <ThemeProvider
          forcedTheme="dark"
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <AnalyticsProvider>
            <ArtifactsProvider>{children}</ArtifactsProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </ProgressProvider>
    </Suspense>
  );
};
