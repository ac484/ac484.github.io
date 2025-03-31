import { Section } from "../../layout/Section";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "../../../data"; // 更新引用路徑

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">我們的服務</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}