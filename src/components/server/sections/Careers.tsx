import Link from "next/link";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { CAREERS, COMPANY_BENEFITS } from "../../../data"; // 更新為從data引用

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