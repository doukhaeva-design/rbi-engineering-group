import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RBI Engineering Group — строительство и модульные сооружения в Казахстане",
  description: "Строительно-монтажные работы любой сложности и мобильные модульные сооружения. 13+ лет опыта, 62+ проектов, собственная техника и лицензия 1 категории.",
  openGraph: {
    title: "RBI Engineering Group",
    description: "Строительство и модульные решения в Казахстане. Проекты, компетенции, лицензии, контакты."
  }
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable} suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
