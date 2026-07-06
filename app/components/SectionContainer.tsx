import type { FC, ReactNode } from "react";

const sectionStyles: Record<string, string> = {
  sobre: "bg-[radial-gradient(circle_at_top,_rgba(30,73,121,0.18),transparent_60%),rgba(5,11,25,0.95)]",
  habilidades: "bg-[radial-gradient(circle_at_top,_rgba(93,182,244,0.14),transparent_55%),rgba(2,17,34,0.94)]",
  projetos: "bg-[radial-gradient(circle_at_top,_rgba(247,212,109,0.14),transparent_55%),rgba(7,17,34,0.93)]",
  jornada: "bg-[radial-gradient(circle_at_top,_rgba(100,135,245,0.14),transparent_55%),rgba(4,12,24,0.95)]",
  contacto: "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_55%),rgba(6,14,29,0.96)]",
};

const SectionContainer: FC<{ id: string; children: ReactNode }> = ({ id, children }) => (
  <section
    id={id}
    className={`relative py-24 border-t border-white/10 backdrop-blur-2xl ${sectionStyles[id] ?? "bg-[rgba(6,22,43,0.96)]"}`}
    style={{ isolation: "isolate" }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">{children}</div>
  </section>
);

export default SectionContainer;
