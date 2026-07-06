import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

const AboutSection: FC<{ age: number }> = ({ age }) => (
  <SectionContainer id="sobre">
      <SectionHeading
        eyebrow="Sobre"
        title="Quem sou eu?"
        desc={`Sou Kiene Daniel, tenho ${age} anos e sou Desenvolvedor Web Front-end em início de carreira. Atualmente estudo React, Next.js e TypeScript para criar interfaces modernas, responsivas e experiências digitais intuitivas.`}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.14)] transition-all duration-300 hover:border-accent-blue-soft/30 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent-peach/85">Resumo</p>
          <p className="mt-4 text-[var(--foreground)]/85 leading-relaxed">
            Desenvolvedor Web apaixonado por criar interfaces modernas, responsivas e experiências digitais intuitivas. Ainda sou iniciante, mas estou focado em aprender com projetos reais e evoluir minhas habilidades a cada dia.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.14)] transition-all duration-300 hover:border-accent-blue-soft/30 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent-peach/85">Detalhes</p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--foreground)]/80">
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">💻 Desenvolvedor Web, atualmente focado em Front-end</li>
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">📚 Estudando e evoluindo minhas habilidades</li>
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">⚛️ Focado em React, Next.js e TypeScript</li>
            <li className="transition-colors duration-200 hover:text-[var(--foreground)]">🎯 Construindo projetos para fortalecer meu portfólio</li>
          </ul>
        </div>
      </div>
  </SectionContainer>
);

export default AboutSection;
