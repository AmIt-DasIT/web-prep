import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Outfit({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Web-Prep",
  description: "Web-Prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
