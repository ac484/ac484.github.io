import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "專業機電工程公司 | 電力系統 | 空調工程 | 給排水工程",
  description: "提供專業機電工程服務，包括電力系統、空調通風、給排水、消防系統等工程設計與施工",
  keywords: "機電工程, 電力系統, 空調工程, 給排水工程, 消防系統, 智能控制系統, 台北機電公司",
  authors: [{ name: "機電工程公司", url: "https://www.yourcompany.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.yourcompany.com",
    siteName: "專業機電工程公司",
    title: "專業機電工程服務 | 電力系統 | 空調工程 | 給排水工程",
    description: "提供高品質的機電系統設計、安裝與維護服務，包括電力系統、空調通風、給排水等工程",
    images: [
      {
        url: "https://www.yourcompany.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "機電工程公司",
      },
    ],
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
        <link rel="canonical" href="https://www.yourcompany.com" />
        <meta name="geo.region" content="TW" />
        <meta name="geo.placename" content="Taipei" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* 結構化資料(JSON-LD)用於增強 SEO */}
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "專業機電工程公司",
              "image": "https://www.yourcompany.com/logo.png",
              "url": "https://www.yourcompany.com",
              "telephone": "+886212345678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "中山北路三段100號",
                "addressLocality": "台北市",
                "addressRegion": "中山區",
                "postalCode": "104",
                "addressCountry": "TW"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.051729,
                "longitude": 121.522324
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/yourcompany",
                "https://www.linkedin.com/company/yourcompany",
                "https://www.youtube.com/channel/yourcompany"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}