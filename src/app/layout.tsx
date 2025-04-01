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
  keywords: "機電工程, 電力系統, 空調工程, 給排水工程, 消防系統, 智能控制",
  openGraph: {
    title: "專業機電工程公司 | 電力系統工程",
    description: "提供高品質的機電系統設計、安裝與維護服務",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "專業機電工程公司",
              "url": "https://ac484.github.io/",
              "logo": "https://ac484.github.io/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(02) 1234-5678",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}