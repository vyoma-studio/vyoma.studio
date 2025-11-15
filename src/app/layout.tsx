import type { Metadata } from "next";

import { exo2Font, montserratAlternatesFont } from "@/lib/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Vyoma Studio",
  description: "Creative studio crafting bold visuals, immersive designs, and standout brand stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2Font.variable} ${montserratAlternatesFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
