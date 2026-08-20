import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Explomed36 — Plongée à El Kala",
    template: "%s | Explomed36",
  },
  description:
    "Baptêmes, formations et plongée scientifique à El Kala, sur la côte méditerranéenne algérienne.",
};


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}