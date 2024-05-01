import { Inter } from "next/font/google";
import localFont from "next/font/local";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const satoshiFont = localFont({
  src: "../assets/styles/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export { interFont, satoshiFont };
