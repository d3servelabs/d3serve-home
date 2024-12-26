"use client";

import { ReactNode, Suspense } from "react";
import { ProgressProvider } from "./progress";
import { ThemeProvider } from "./theme";
import { ArtifactsProvider } from "@/providers/artifacts";
import { Loading } from "@/components/Loading";

type Props = { children: ReactNode };

export const Providers = ({ children }: Readonly<Props>) => {
  return (
    <Suspense fallback={<Loading />}>
      <ProgressProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          storageKey="theme"
        >
          <ArtifactsProvider>{children}</ArtifactsProvider>
        </ThemeProvider>
      </ProgressProvider>
    </Suspense>
  );
};
