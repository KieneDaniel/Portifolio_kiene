import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import SoftSkillCard from "./SoftSkillCard";
import { skills, softSkills } from "../data/siteData";

const SkillsSection: FC = () => (
  <SectionContainer id="habilidades">
    <div>
      <SectionHeading
        eyebrow="Habilidades"
        title="Tecnologias & Skills"
        desc=""
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>

    <div className="mt-20">
      <SectionHeading
        eyebrow="Características Pessoais"
        title="Soft Skills"
        desc=""
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {softSkills.map((skill) => (
          <SoftSkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default SkillsSection;
