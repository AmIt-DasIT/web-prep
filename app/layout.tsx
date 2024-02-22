import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeBox from "./themebox";

const outfit = Outfit({ subsets: ["latin"] });

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
      <body className={outfit.className}>
        <ThemeBox>{children}</ThemeBox>
      </body>
    </html>
  );
}
