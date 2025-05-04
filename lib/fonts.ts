import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";

//fonts for headers and main subject
export const space = Space_Grotesk({
  weight: "600",
  subsets: ["latin"],
});

// fonts for innear text
export const instrument = Instrument_Sans({
  weight: "600",
  subsets: ["latin-ext"],
});

export const samarank = localFont({
  src: "../app/fonts/samana.ttf",
  display: "swap",
});
