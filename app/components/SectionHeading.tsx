import type { FC } from "react";

const SectionHeading: FC<{ eyebrow: string; title: string; desc: string }> = ({ eyebrow, title, desc }) => (
  <div className="mb-12 max-w-3xl">
    <p className="text-sm uppercase tracking-[0.35em] text-accent-peach/90">{eyebrow}</p>
    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">{title}</h2>
    <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--foreground)]/80">{desc}</p>
  </div>
);

export default SectionHeading;
