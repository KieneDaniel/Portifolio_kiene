import type { FC } from "react";
import SocialIcon from "./SocialIcon";

const ContactCard: FC = () => (
  <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
    <div>
      <p className="text-lg font-semibold">José Augusto Sangolo</p>
      <p className="text-sm text-[var(--foreground)]/70 mt-1">josesangolo2015@gmail.com</p>
    </div>
    <div className="flex items-center gap-4">
      <SocialIcon href="https://www.linkedin.com/in/kiene-daniel-9374133a6" label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-6.86c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.79-2.65 3.63V23h-4V8z" />
        </svg>
      </SocialIcon>
      <SocialIcon href="#" label="Facebook">
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
  </div>
);

export default ContactCard;
