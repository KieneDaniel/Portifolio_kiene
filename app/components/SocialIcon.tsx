import type { FC, ReactNode } from "react";

const SocialIcon: FC<{ href?: string; label: string; children: ReactNode }> = ({ href, label, children }) => (
  <a
    href={href || "#"}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-blue-soft/60 text-accent-blue-soft transition-all duration-300 hover:bg-accent-blue-soft hover:text-accent-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue-soft/30"
  >
    {children}
  </a>
);

export default SocialIcon;
