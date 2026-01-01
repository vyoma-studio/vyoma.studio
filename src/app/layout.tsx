import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NotoSansFont, NotoSerifFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vyoma Studio",
  description:
    "Creative studio crafting bold visuals, immersive designs, and standout brand stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSerifFont.variable} ${NotoSansFont.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
