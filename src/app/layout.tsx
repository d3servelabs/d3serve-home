import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import { WEBSITE } from "@/constants";
import { cn } from "@/utils/cn";
import { Preloader } from "@/components/Preloader";
import { Providers } from "@/providers";
import { Contexts } from "@/contexts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Usercentrics } from "@/components/Usercentrics";

import "./globals.css";

const roboto_font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

const roboto_mono_font = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto-mono",
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
      <body
        className={cn(
          "min-h-screen w-full antialiased font-roboto",
          roboto_font.variable,
          roboto_mono_font.variable,
        )}
      >
        <Contexts>
          <Preloader />
          <Providers>
            <Contexts>
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <div className="flex w-full flex-1 flex-col">{children}</div>
                <Footer />
                <Usercentrics settingsId="x6B2M3iJewRGJX" />
              </div>
            </Contexts>
          </Providers>
        </Contexts>
      </body>
    </html>
  );
}
