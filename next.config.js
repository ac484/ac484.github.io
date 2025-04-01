/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 靜態導出
  images: {
    unoptimized: true, // 禁用圖片優化，因為 GitHub Pages 不支援圖片優化服務
  },
  // 添加舊瀏覽器支援
  transpilePackages: ['react-dom']
};

module.exports = nextConfig;