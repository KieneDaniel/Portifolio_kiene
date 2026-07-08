import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import { skills } from "../data/siteData";

const SkillsSection: FC = () => (
  <SectionContainer id="habilidades">
      <SectionHeading
        eyebrow="Habilidades"
        title=""
        desc=""
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
  </SectionContainer>
);

export default SkillsSection;
