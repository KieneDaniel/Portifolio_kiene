import type { FC } from "react";
import SocialIcon from "./SocialIcon";

const ContactCard: FC = () => (
  <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
    <div>
      <p className="text-lg font-semibold">Kiene Daniel</p>
      <p className="text-sm text-[var(--foreground)]/70 mt-1">kienedaniel16@gmail.com</p>
    </div>
    <div className="flex items-center gap-4">
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
  </div>
);

export default ContactCard;
