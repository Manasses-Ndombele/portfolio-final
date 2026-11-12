import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700","800","900"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-poppins" });
export const metadata: Metadata = {
  title: "MANASSÉS.dev | Desenvolvedor Web Fullstack",
  description: "Sites profissionais que fazem seu negócio aparecer no Google e atrair clientes.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt"><body suppressHydrationWarning className={`${montserrat.variable} ${poppins.variable}`}>{children}</body></html>;
}
