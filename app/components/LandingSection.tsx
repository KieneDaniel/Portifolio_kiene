"use client";

import React, { useEffect, useState } from "react";
import SocialIcon from "./SocialIcon";
import { heroTechs } from "../data/siteData";

const LandingSection = () => {
  const images = ["/kiene1.png", "/kiene2.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((v) => (v + 1) % images.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="animated-bg min-h-screen w-full text-[var(--foreground)] px-6 md:px-16 pt-48 pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          <div
            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-40"
            style={{
              background: "radial-gradient(circle, var(--background) 0%, var(--accent-blue-soft) 60%, transparent 100%)",
            }}
          />

          <div className="relative" style={{ perspective: 1000 }}>
            <div
              className={`relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full transition-transform`}
              style={{ transform: `rotateY(${current % 2 === 1 ? 180 : 0}deg)`, transformStyle: "preserve-3d", transitionDuration: "1200ms" }}
            >
              <img
                src={images[0]}
                alt="avatar"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
                style={{ backfaceVisibility: "hidden" }}
              />

              <img
                src={images[1]}
                alt="photo"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
                style={{ transform: "rotateY(180deg) scale(0.98) translateY(-0%)", backfaceVisibility: "hidden", objectPosition: "top center" }}
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-accent-blue-soft/70 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex items-center gap-2">
            <span className="text-brand">Kiene Daniel</span>
            <span className="text-accent-peach">✦</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">Desenvolvedor Web Front-end Jr.</h2>

          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base font-semibold text-accent-blue-soft">
            {heroTechs.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-accent-peach">•</span>}
                {tech}
              </span>
            ))}
          </p>

          <p className="text-base md:text-lg text-[var(--foreground)]/80 max-w-xl mt-2">
            Sou apaixonado por tecnologia e estou sempre em busca de novos desafios.
          </p>

          <div className="mt-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <SocialIcon href="https://www.linkedin.com/in/kiene-daniel-9374133a6" label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-6.86c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.79-2.65 3.63V23h-4V8z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://github.com/KieneDaniel" label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:kienedaniel16@gmail.com" label="E-mail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 7.5 9.75-7.5" />
                </svg>
              </SocialIcon>
            </div>

            <a
              href="/cv-kiene.pdf" // Vou adicionar o arquivo PDF do CV na pasta public para que o link funcione corretamente.
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-accent-blue-soft bg-accent-blue-soft/10 px-7 py-3 text-base font-semibold text-accent-blue-soft shadow-[0_18px_50px_rgba(93,182,244,0.18)] transition-all duration-300 hover:bg-accent-blue-soft hover:text-accent-dark hover:shadow-[0_20px_60px_rgba(93,182,244,0.25)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              Baixar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
