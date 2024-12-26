"use client";

import type { ReactNode } from "react";
import { Cursor } from "@/components/Cursor";
import { HAS_CURSOR, HAS_TOPPER } from "@/constants";
import { Topper } from "@/components/Topper";

type Props = { children: ReactNode };

export const ArtifactsProvider = ({ children }: Readonly<Props>) => {
  return (
    <>
      {children}
      {HAS_CURSOR && <Cursor />}
      {HAS_TOPPER && <Topper />}
    </>
  );
};
