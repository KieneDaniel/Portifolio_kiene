import type { FC } from "react";
import type { Project } from "../data/siteData";

const ProjectCard: FC<Project> = ({ title, desc, preview, imgprev, type, tags, liveUrl, repoUrl }) => (
  <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue-soft/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
    <div className="relative h-44 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(93,182,244,0.18),transparent_35%),linear-gradient(180deg,#07121f,#050814)]">
      {imgprev ? (
        <img src={imgprev} alt={`${title} preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/70">{preview}</div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent-blue-soft shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <span>{preview}</span>
      </div>
      <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--foreground)]/70">
        {type}
      </div>
    </div>
    <div className="flex flex-1 flex-col gap-5 px-6 py-7">
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--foreground)]/75">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs rounded-full border border-accent-blue-soft/20 bg-accent-blue-soft/10 px-3 py-1 text-accent-blue-soft">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:border-accent-blue-soft/40 hover:bg-accent-blue-soft/10 hover:text-accent-blue-soft"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          Ver projeto
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-accent-blue-soft/70 bg-accent-blue-soft/10 px-4 py-2 text-sm font-semibold text-accent-blue-soft transition duration-300 hover:bg-accent-blue-soft hover:text-accent-dark"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
