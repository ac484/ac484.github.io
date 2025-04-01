// filepath: d:\GitHub\ac484.github.io\src\app\not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-4">404 - 頁面不存在</h1>
      <p className="text-lg text-gray-600 mb-8">抱歉，您請求的頁面不存在。</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        返回首頁
      </Link>
    </div>
  );
}