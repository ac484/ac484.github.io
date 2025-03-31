src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "專業機電工程公司 | 電力系統 | 空調工程 | 給排水工程",
  description: "提供專業機電工程服務，包括電力系統、空調通風、給排水、消防系統等工程設計與施工",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}