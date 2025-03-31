import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import type { ReactNode } from "react";
import { COMPANY_INFO } from "../../../data"; // 更新為從data引用

interface ContactProps {
  children: ReactNode;
}

export function Contact({ children }: ContactProps) {
  return (
    <Section id="contact" className="bg-gray-800 text-white">
      <Container>
        <h2 className="heading-2 text-center mb-12">聯絡我們</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-3 mb-4">聯絡資訊</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-3">📍</span> {COMPANY_INFO.address}
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span> 
                <a href={`tel:+886${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="hover:text-blue-300">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span> 
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-300" rel="nofollow">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">🕒</span> {COMPANY_INFO.hours}
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
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}