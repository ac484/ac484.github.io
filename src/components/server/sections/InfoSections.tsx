import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "../../layout/Layout";
import { COMPANY_FEATURES, CAREERS, COMPANY_BENEFITS } from "../../../data";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <Container>
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
            <h2 className="heading-2 mb-6">關於我們</h2>
            <p className="text-gray-600 mb-4">
              我們是專業的機電工程公司，擁有20年以上的行業經驗，致力於為客戶提供高品質的機電系統解決方案。
            </p>
            <p className="text-gray-600 mb-4">
              我們的團隊由專業工程師和技術人員組成，熟悉各類機電系統的設計、安裝和維護。
            </p>
            <ul className="space-y-2 mb-6">
              {COMPANY_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Careers() {
  return (
    <Section id="careers" className="bg-white">
      <Container>
        <h2 className="heading-2 text-center mb-12">加入我們的團隊</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-3 mb-4">我們正在尋找</h3>
            <ul className="space-y-4">
              {CAREERS.map((position, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> {position}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="heading-3 mb-4">為什麼加入我們？</h3>
            <p className="text-gray-600 mb-4">
              我們提供具有競爭力的薪酬、完善的福利制度以及專業的培訓機會，幫助您在職業生涯中不斷成長。
            </p>
            <p className="text-gray-600 mb-4">
              如果您對機電工程充滿熱情，並希望成為我們團隊的一員，請立即聯絡我們！
            </p>
            <Link href="#contact" className="btn-primary">
              聯絡我們
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}