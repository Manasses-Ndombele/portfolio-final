import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const SITE_URL = "https://www.manassesndombele.com/";
const TITLE = "Sites e Landing Pages para Negócios Locais | Manassés Ndombele";
const DESCRIPTION =
  "Ajudo negócios locais a aparecerem no Google e conquistarem mais clientes online. Criação de sites profissionais e landing pages que convertem.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manassesndombele.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_PT",
    siteName: "MANASSÉS.dev",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
