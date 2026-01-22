import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "CrochetHub - Patrones de Tejido",
  description: "Encuentra los mejores patrones de crochet para tu próximo proyecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-white pb-24 md:pb-0", inter.variable, playfair.variable)}>
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <BottomNav />
      </body>
    </html>
  );
}
