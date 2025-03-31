import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/src/@components/client/Navigation";
import { BackToTop } from "@/src/@components/client/BackToTop";
import { ContactForm } from "@/src/@components/client/ContactForm";

// 服務項目數據
const services = [
  {
    icon: "⚡",
    title: "電力系統工程",
    description: "高低壓配電系統設計與施工、變電站建設、電力設備安裝與維護"
  },
  {
    icon: "💧",
    title: "給排水工程",
    description: "自來水系統、消防系統、污水處理系統的設計與施工"
  },
  {
    icon: "❄️",
    title: "空調通風工程",
    description: "中央空調系統、通風系統、冷凍機房設備安裝與維護"
  },
  {
    icon: "🔧",
    title: "機械設備安裝",
    description: "工業機械設備、電梯、自動化系統的安裝與調試"
  },
  {
    icon: "🛡️",
    title: "消防系統工程",
    description: "自動噴淋系統、火災報警系統、防排煙系統設計與施工"
  },
  {
    icon: "🤖",
    title: "智能控制系統",
    description: "樓宇自動化系統、智能照明控制、能源管理系統"
  }
];

// 工程案例數據
const projects = [
  {
    image: "/project1.png",
    title: "台北金融大樓機電工程",
    description: "完成全棟電力、空調、消防系統整合工程"
  },
  {
    image: "/project2.png",
    title: "科技園區配電系統",
    description: "高壓配電站建設與變電設備安裝"
  },
  {
    image: "/project3.png",
    title: "醫院空調系統更新",
    description: "中央空調系統全面升級與節能改造"
  }
];

function ProjectCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 導航欄 - 客戶端組件 */}
      <Navigation />

      {/* 主視覺區 */}
      <section className="relative h-[80vh] bg-gray-800 text-white flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">專業機電工程解決方案</h1>
          <p className="text-xl md:text-2xl mb-8">提供高品質的機電系統設計、安裝與維護服務</p>
          <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium inline-block">
            免費諮詢
          </Link>
        </div>
      </section>

      {/* 服務項目 */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">我們的服務</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工程案例 */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">工程案例</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 關於我們 */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/about.png"
                alt="關於我們"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">關於我們</h2>
              <p className="text-gray-600 mb-4">
                我們是專業的機電工程公司，擁有20年以上的行業經驗，致力於為客戶提供高品質的機電系統解決方案。
              </p>
              <p className="text-gray-600 mb-4">
                我們的團隊由專業工程師和技術人員組成，熟悉各類機電系統的設計、安裝和維護。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 專業認證工程團隊
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 高品質施工標準
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 24小時緊急服務
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">聯絡我們</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-3">📍</span> 台北市中山區中山北路三段100號
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span> <a href="tel:+886212345678" className="hover:text-blue-300">(02) 1234-5678</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span> <a href="mailto:info@electromechanical.com" className="hover:text-blue-300" rel="nofollow">info@electromechanical.com</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🕒</span> 週一至週五 9:00-18:00
                </p>
              </div>
              
              {/* 公司地圖位置 */}
              <div className="mt-6 h-64 rounded-lg overflow-hidden">
                <div className="h-full w-full relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5042599776256!2d121.52232491500564!3d25.051729983963893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96c3d296a67%3A0x8b0c55aeaacbcc0c!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDoirHkuK3lsbHljZrot6_kuInmrrUxMDDomZ8!5e0!3m2!1szh-TW!2stw!4v1636530000000!5m2!1szh-TW!2stw" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="公司位置地圖"
                    aria-label="公司位置地圖"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              {/* 聯絡表單 - 客戶端組件 */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 人才招募 */}
      <section id="careers" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">加入我們的團隊</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">我們正在尋找</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 電力工程師
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 空調技術員
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 給排水設計師
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> 消防系統工程師
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">為什麼加入我們？</h3>
              <p className="text-gray-600 mb-4">
                我們提供具有競爭力的薪酬、完善的福利制度以及專業的培訓機會，幫助您在職業生涯中不斷成長。
              </p>
              <p className="text-gray-600 mb-4">
                如果您對機電工程充滿熱情，並希望成為我們團隊的一員，請立即聯絡我們！
              </p>
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo.png" // 注意：需確認有無白色版本logo
                alt="機電工程公司"
                width={120}
                height={40}
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" rel="nofollow" className="hover:text-white">Facebook</a>
              <a href="#" rel="nofollow" className="hover:text-white">LinkedIn</a>
              <a href="#" rel="nofollow" className="hover:text-white">YouTube</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {currentYear} 機電工程公司 版權所有</p>
          </div>
        </div>
      </footer>

      {/* 回到頂部按鈕 - 客戶端組件 */}
      <BackToTop />
    </div>
  );
}
