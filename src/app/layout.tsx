import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { WEBSITE } from "@/constants";
import { cn } from "@/utils/cn";
import { Preloader } from "@/components/Preloader";
import { Providers } from "@/providers";
import { Contexts } from "@/contexts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: WEBSITE.title,
  description: WEBSITE.description,
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen w-full antialiased", font.className)}>
        <Preloader />
        <Providers>
          <Contexts>
            <Header />
            {children}
            <Footer />
          </Contexts>
        </Providers>
      </body>
    </html>
  );
}
