import type { FC } from "react";
import type { SoftSkill } from "../data/siteData";

const SoftSkillCard: FC<SoftSkill> = ({ name, Icon, color, description }) => (
  <div
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-transparent p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_var(--skill-glow)]"
    style={{ ['--skill-glow' as any]: `${color}40`, ['--skill-color' as any]: color }}
  >
    <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
      <Icon className="h-10 w-10 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--skill-color)]" />
    </div>
    <p className="font-semibold text-[var(--foreground)] mb-3 text-lg">{name}</p>
    <p className="text-sm text-[var(--foreground)]/70">{description}</p>
  </div>
);

export default SoftSkillCard;
