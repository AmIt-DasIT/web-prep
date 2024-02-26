import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeBox from "./themebox";
// import Cookies from "./cookies";
import dynamic from 'next/dynamic'
 
const Cookies = dynamic(() => import('./cookies'), { ssr: false })

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
        <Cookies />
        <ThemeBox>{children}</ThemeBox>
      </body>
    </html>
  );
}
