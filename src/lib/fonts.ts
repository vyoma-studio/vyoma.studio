import { Noto_Sans, Noto_Serif } from "next/font/google";

const NotoSansFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
  display: "auto",
});

const NotoSerifFont = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "auto",
});

export { NotoSansFont, NotoSerifFont };
