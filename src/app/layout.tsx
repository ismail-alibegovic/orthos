import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poliklinika ORTHOS Sarajevo — ortopedija i opšta hirurgija",
  description:
    "Poliklinika ORTHOS Sarajevo: ortopedija, traumatologija, opšta hirurgija i jednodnevna artroskopska hirurgija.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0e1a2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
