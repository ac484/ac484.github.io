import Link from "next/link";
import { Container } from "../../layout/Container"; // 更新引用路徑

export function Hero() {
  return (
    <section className="relative h-[80vh] bg-gray-800 text-white flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <Container className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">專業機電工程解決方案</h1>
        <p className="text-xl md:text-2xl mb-8">提供高品質的機電系統設計、安裝與維護服務</p>
        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium inline-block">
          免費諮詢
        </Link>
      </Container>
    </section>
  );
}