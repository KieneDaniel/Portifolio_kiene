import type { FC } from "react";
import type { Skill } from "../data/siteData";

const SkillCard: FC<Skill> = ({ name, Icon, color, proficiency }) => (
  <div
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-transparent p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_var(--skill-glow)]"
    style={{ ['--skill-glow' as any]: `${color}40`, ['--skill-color' as any]: color }}
  >
    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
      <Icon className="h-16 w-16 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--skill-color)]" />
    </div>
    <p className="font-semibold text-[var(--foreground)] mb-4 text-lg">{name}</p>
    <div className="flex items-center justify-between text-xs text-[var(--foreground)]/70 mb-3">
      <span>Proficiência</span>
      <span>{proficiency}%</span>
    </div>
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
        style={{ width: `${proficiency}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

export default SkillCard;
