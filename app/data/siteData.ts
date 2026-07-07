import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaHandshake,
  FaSync,
  FaTrophy,
  FaHeart,
  FaClock,
} from "react-icons/fa";

export type Skill = {
  name: string;
  Icon: IconType;
  color: string;
  proficiency: number;
};

export type SoftSkill = {
  name: string;
  Icon: IconType;
  color: string;
  description: string;
};

export type Project = {
  title: string;
  desc: string;
  preview: string;
  imgprev?: string;
  type: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

export type JourneyStep = {
  year: string;
  title: string;
  desc: string;
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const heroTechs = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export const skills: Skill[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e", proficiency: 65 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6", proficiency: 85 },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063", proficiency: 85 },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff", proficiency: 80 },
  { name: "React", Icon: SiReact, color: "#61dafb", proficiency: 90 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8", proficiency: 85 },
  { name: "HTML5", Icon: SiHtml5, color: "#e34c26", proficiency: 90 },
  { name: "CSS3", Icon: SiCss, color: "#264de4", proficiency: 85 },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Trabalho em Equipa",
    Icon: FaUsers,
    color: "#8b5cf6",
    description: "Colaboração eficaz e apoio mútuo",
  },
  {
    name: "Comunicação",
    Icon: FaComments,
    color: "#3b82f6",
    description: "Expressão clara de ideias e conceitos",
  },
  {
    name: "Criatividade",
    Icon: FaLightbulb,
    color: "#fbbf24",
    description: "Pensamento inovador e soluções criativas",
  },
  {
    name: "Liderança",
    Icon: FaHandshake,
    color: "#f97316",
    description: "Influência positiva e orientação de equipas",
  },
  {
    name: "Adaptabilidade",
    Icon: FaSync,
    color: "#10b981",
    description: "Flexibilidade perante mudanças e desafios",
  },
  {
    name: "Resolução de Problemas",
    Icon: FaTrophy,
    color: "#ec4899",
    description: "Análise crítica e soluções efetivas",
  },
  {
    name: "Empatia",
    Icon: FaHeart,
    color: "#ef4444",
    description: "Compreensão e consideração pelos outros",
  },
  {
    name: "Gestão de Tempo",
    Icon: FaClock,
    color: "#06b6d4",
    description: "Organização e cumprimento de prazos",
  },
];

export const projects: Project[] = [
  {
    title: "Streamflix",
    desc: "Plataforma de streaming desenvolvida para demonstrar competências em desenvolvimento web.",
    preview: "streamflix",
    type: "🍿",
    tags: ["Vite", "TypeScript", "Tailwind", "TMDB", "VIDSRC", "Supabase"],
    liveUrl: "https://streming-site.vercel.app/",
    repoUrl: "https://github.com/KieneDaniel",
    imgprev: "/streamflix.png",
  },
  {
    title: "Eduque - Plataforma Educacional",
    desc: "A plataforma completa para gerenciar tarefas, anotações e seu calendário acadêmico. Junte-se a milhares de estudantes que já transformaram sua forma de estudar.",
    preview: "Eduque",
    type: "📚",
    tags: ["React","Next.js", "TypeScript", "Tailwind", "Firebase", "TelcoSMS"],
    liveUrl: "https://eduque.vercel.app/",
    repoUrl: "https://github.com/KieneDaniel",
    imgprev: "/eduque1.png",
  },
  {
    title: "Cloud Vault - Armazenamento em Nuvem",
    desc: "Plataforma de armazenamento seguro na nuvem, desenvolvida com foco em segurança, organização e experiência do utilizador.",
    preview: "Cloud Vault",
    type: "🔒",
    tags: ["Vite", "TypeScript", "Tailwind", "Supabase"],
    liveUrl: "https://cloudvault-eight.vercel.app/",
    repoUrl: "https://github.com/KieneDaniel",
    imgprev: "/cloud1.png", // É a tela inicial do projeto. É sim
  },
  
];

export const journey: JourneyStep[] = [
  { year: "2023", title: "Primeiros passos", desc: "Comecei a especializar-me na área da informática, aprendendo a base, desde a lógica de programação até codificações em Visualg" },
  { year: "2024", title: "Fundamentos sólidos", desc: "Aprofundei lógica de programação e comecei a construir pequenos projetos." },
  { year: "2025", title: "React & Next.js", desc: "Após ter melhorado em HTML e CSS, comecei a aprender React e Next.js." },
  { year: "2026", title: "Construindo o futuro", desc: "Nunca parando de aprender e melhorar." },
];
