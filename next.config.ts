import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 靜態導出
  images: {
    unoptimized: true, // 禁用圖片優化，因為 GitHub Pages 不支援圖片優化服務
  },
};

export default nextConfig;
