import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 靜態導出
  images: {
    unoptimized: true, // 禁用圖片優化
  },
};

export default nextConfig;
