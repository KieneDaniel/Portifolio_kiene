import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

const AboutSection: FC<{ age: number }> = ({ age }) => (
  <SectionContainer id="sobre">
      <SectionHeading
        eyebrow="Sobre"
        title="Quem sou eu?"
        desc={`Gestor de vendas com sólida experiência em contabilidade de stock e
            operações de caixa, habituado a trabalhar com foco em resultados e
            eficiência organizacional. A minha trajetória profissional é marcada pela
            capacidade de liderar equipas, otimizar processos comerciais e garantir o
            controlo rigoroso de inventário e fluxos financeiros. Além do
            conhecimento técnico, destaco-me pelo compromisso ético, resiliência e
            abertura ao aprendizado contínuo.
            `}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.14)] transition-all duration-300 hover:border-accent-blue-soft/30 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent-peach/85">Resumo</p>
          <p className="mt-4 text-[var(--foreground)]/85 leading-relaxed">
            Sou gestor de vendas com sólida experiência em contabilidade de stock e operações de caixa, focado em resultados e eficiência organizacional. Destaco-me pela liderança de equipas, otimização de processos comerciais e controlo rigoroso de inventário e finanças, aliados ao compromisso ético, resiliência e abertura à aprendizagem contínua.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.14)] transition-all duration-300 hover:border-accent-blue-soft/30 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent-peach/85">Detalhes</p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--foreground)]/80">
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">👥 Capacidade de liderar equipas e otimizar processos comerciais
            </li>
                <li className="transition-colors duration-200 hover:text-[var(--foreground)]">🤝 Compromisso ético, resiliente e aberto ao aprendizado contínuo
              </li>
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">📊 Gestor de vendas com experiência em contabilidade de stock e operações de caixa</li>
          </ul>
        </div>
      </div>
  </SectionContainer>
);

export default AboutSection;
