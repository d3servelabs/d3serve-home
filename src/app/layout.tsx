import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { WEBSITE } from "@/constants";
import { cn } from "@/utils/cn";
import { Preloader } from "@/components/Preloader";
import { Providers } from "@/providers";
import { Contexts } from "@/contexts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: WEBSITE.title,
  description: WEBSITE.description,
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen w-full antialiased", font.className)}>
        <Contexts>
          <Preloader />
          <Providers>
            <Contexts>
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <div className="flex w-full flex-1 flex-col">{children}</div>
                <Footer />
              </div>
            </Contexts>
          </Providers>
        </Contexts>
      </body>
    </html>
  );
}
