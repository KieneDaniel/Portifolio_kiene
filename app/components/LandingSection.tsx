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
            <span className="text-brand">José Augusto Sangolo</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">Gestor de Vendas</h2>

          <p className="text-base md:text-lg text-[var(--foreground)]/80 max-w-xl mt-2">
            Lorem ipsum dolor sit amet.
          </p>

          <div className="mt-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <SocialIcon href="#" label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-6.86c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.79-2.65 3.63V23h-4V8z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:josesangolo2015@gmail.com" label="E-mail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 7.5 9.75-7.5" />
                </svg>
              </SocialIcon>
            </div>

            <a
              href="/cv-kiene.pdf"
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
