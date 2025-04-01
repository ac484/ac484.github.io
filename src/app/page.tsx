import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 導航欄 */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png" // 替換為你的公司logo
              alt="機電工程公司"
              width={120}
              height={40}
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="hover:text-blue-600 font-medium">服務項目</Link>
            <Link href="#projects" className="hover:text-blue-600 font-medium">工程案例</Link>
            <Link href="#about" className="hover:text-blue-600 font-medium">關於我們</Link>
            <Link href="#contact" className="hover:text-blue-600 font-medium">聯絡我們</Link>
          </div>
          <button className="md:hidden">☰</button>
        </div>
      </nav>

      {/* 主視覺區 */}
      <section className="relative h-[80vh] bg-gray-800 text-white flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">專業機電工程解決方案</h1>
          <p className="text-xl md:text-2xl mb-8">提供高品質的機電系統設計、安裝與維護服務</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            免費諮詢
          </button>
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
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
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
                src="/about.jpg" // 替換為公司團隊照片
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
                  <span className="mr-3">📞</span> (02) 1234-5678
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span> info@electromechanical.com
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🕒</span> 週一至週五 9:00-18:00
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="您的姓名"
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="電子郵件"
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="電話號碼"
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="您的需求"
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full"
                >
                  送出詢價
                </button>
              </form>
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
                src="/logo-white.png" // 替換為白色版本logo
                alt="機電工程公司"
                width={120}
                height={40}
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} 機電工程公司 版權所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
    image: "/project1.jpg",
    title: "台北金融大樓機電工程",
    description: "完成全棟電力、空調、消防系統整合工程"
  },
  {
    image: "/project2.jpg",
    title: "科技園區配電系統",
    description: "高壓配電站建設與變電設備安裝"
  },
  {
    image: "/project3.jpg",
    title: "醫院空調系統更新",
    description: "中央空調系統全面升級與節能改造"
  }
];