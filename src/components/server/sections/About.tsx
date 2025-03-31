import Image from "next/image";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { COMPANY_FEATURES } from "../../../data"; // 更新為從data引用

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