import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";


export const metadata = {
  title: "KEITH JOSHUA SALAVER",
  description: "KeithJoshua Portfolio",
  icons: {
    icon: "/kj.svg",
  },
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