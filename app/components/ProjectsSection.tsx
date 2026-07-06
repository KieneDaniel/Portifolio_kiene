import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/siteData";

const ProjectsSection: FC = () => (
  <SectionContainer id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="⭐ Projetos em Destaque"
        desc=""
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
  </SectionContainer>
);

export default ProjectsSection;
