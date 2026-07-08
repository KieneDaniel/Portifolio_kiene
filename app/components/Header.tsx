"use client";

import { useEffect, useState } from "react";
import type { FC } from "react";
import { navItems } from "../data/siteData";
import NavLink from "./NavLink";

const Header: FC<{ activeSection: string; onNavigate?: () => void }> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 justify-between items-center gap-4 px-6 md:px-16 py-5">
        <div className="flex items-center gap-3">
          <div>
            <span className="text-lg font-bold">&lt;/&gt;</span>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold text-brand tracking-wide leading-tight">José Augusto Sangolo</p>
            <p className="text-xs text-[var(--foreground)]/80">Gestor de Vendas</p>
          </div>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8 font-medium">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={activeSection === item.href} onClick={onNavigate} />
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <button
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-accent-blue-soft/40 text-accent-blue-soft transition-colors duration-300 hover:bg-accent-blue-soft/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[var(--background)]/95 backdrop-blur-md border-b border-white/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={activeSection === item.href}
              onClick={() => {
                setMobileOpen(false);
                onNavigate?.();
              }}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
