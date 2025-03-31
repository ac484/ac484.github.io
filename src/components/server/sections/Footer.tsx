import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../../data"; // 更新為從data引用

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo-white.png"
              alt="機電工程公司"
              width={120}
              height={40}
            />
          </div>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank"
                rel="nofollow noopener noreferrer" 
                className="hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="#services" className="hover:text-white">服務項目</Link>
            <Link href="#projects" className="hover:text-white">工程案例</Link>
            <Link href="#about" className="hover:text-white">關於我們</Link>
            <Link href="#contact" className="hover:text-white">聯絡我們</Link>
            <Link href="#careers" className="hover:text-white">人才招募</Link>
          </div>
          <p>© {currentYear} 機電工程公司 版權所有</p>
        </div>
      </div>
    </footer>
  );
}