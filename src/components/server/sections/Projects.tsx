import { Section } from "../../layout/Section";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../../../data"; // 更新引用路徑

export function Projects() {
  return (
    <Section id="projects" className="bg-gray-50">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">工程案例</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}