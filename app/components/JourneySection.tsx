import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import { journey } from "../data/siteData";

const JourneySection: FC = () => (
  <SectionContainer id="jornada">
      <SectionHeading
        eyebrow="Jornada"
        title="Minha trajetória"
        desc="Um resumo do meu percurso até agora — desde os primeiros passos até onde estou hoje."
      />

      <div className="relative pl-8 border-l-2 border-white/10 space-y-10">
        {journey.map((step) => (
          <div key={step.year} className="relative group">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-accent-blue-soft shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-transform duration-300 group-hover:scale-125" />
            <p className="text-sm font-semibold text-accent-peach">{step.year}</p>
            <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
            <p className="text-sm text-[var(--foreground)]/75 mt-1 max-w-xl">{step.desc}</p>
          </div>
        ))}
      </div>
  </SectionContainer>
);

export default JourneySection;
