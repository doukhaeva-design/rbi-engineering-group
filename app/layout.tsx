import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import WhatsAppButton from "./components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Строительная компания в Астане, Казахстан | RBI Engineering Group",
  description: "Генеральный подряд, строительно-монтажные работы (СМР), изготовление и монтаж металлоконструкций, модульные здания. Работаем с B2B и госсектором по всему Казахстану.",
  openGraph: {
    title: "Строительная компания RBI Engineering Group | Астана",
    description: "Строительство, модульные здания, металлоконструкции. Лицензия I категории.",
    type: "website",
    locale: "ru_RU",
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
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
