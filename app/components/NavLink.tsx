import type { FC } from "react";

const NavLink: FC<{ href: string; label: string; active: boolean; onClick?: () => void }> = ({ href, label, active, onClick }) => (
  <li className="group relative">
    <a
      href={href}
      onClick={onClick}
      className={`relative pb-1 transition-colors duration-300 ${
        active ? "text-accent-blue-soft" : "text-[var(--foreground)]/70 group-hover:text-accent-blue-soft"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-accent-blue-soft transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  </li>
);

export default NavLink;
