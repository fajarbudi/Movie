"use client";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const inter = Roboto_Condensed({ subsets: ["latin"], weight: "400" });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  });
  return (
    <html id="vi" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
