import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components";

import { SectionLayout } from "@/components";

export const metadata: Metadata = {
  title: "DVLPR-KIT",
  description: "Portfolio by K1T",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}