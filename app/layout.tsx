import type { Metadata } from "next";
import "./globals.css";

import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body>
      {children}
      </body>
    </html>
  );
}
