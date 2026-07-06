"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import JourneySection from "./components/JourneySection";
import ContactSection from "./components/ContactSection";
import { navItems } from "./data/siteData";

const HomePage: FC = () => {
  const { ref } = useInView<HTMLDivElement>();
  const [activeSection, setActiveSection] = useState("#inicio");

  const birthYear = 2007;
  const age = new Date().getFullYear() - birthYear;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    // Observe each section

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full text-[var(--foreground)]">
      <Header activeSection={activeSection} />
      <div ref={ref}>
        <LandingSection />
      </div>
      <AboutSection age={age} />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
