import { Exo_2, Montserrat_Alternates } from "next/font/google";

const exo2Font = Exo_2({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
  variable: "--font-exo2",
  display: "auto",
});

const montserratAlternatesFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat-alternates",
  display: "auto",
});

export { exo2Font, montserratAlternatesFont };
