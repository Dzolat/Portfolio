import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealDzolat | Portfolio",
  description: "RealDzolat | Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="dark min-h-full flex flex-col">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat blur-md scale-110" />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
