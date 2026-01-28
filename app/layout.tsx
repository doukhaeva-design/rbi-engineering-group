import { Geist, Geist_Mono } from "next/font/google"; //
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RBI Engineering Group — строительство и модульные сооружения в Казахстане",
  description: "Строительно-монтажные работы любой сложности и мобильные модульные сооружения. 13+ лет опыта, 62+ проектов, собственная техника и лицензия 1 категории.",
  openGraph: {
    title: "RBI Engineering Group",
    description: "Строительство и модульные решения в Казахстане. Проекты, компетенции, лицензии, контакты."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
