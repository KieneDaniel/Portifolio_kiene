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

export type Skill = {
  name: string;
  Icon: IconType;
  color: string;
  proficiency: number;
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
  { label: "Habilidades", href: "#habilidades" },
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
  { name: "Projectos de Marketing", Icon: SiJavascript, color: "#f7df1e", proficiency: 65 },
  { name: "Liderança", Icon: SiTypescript, color: "#3178c6", proficiency: 85 },
  { name: "Cooperação Interpessoal", Icon: SiNodedotjs, color: "#68a063", proficiency: 85 },
  { name: "Comunicólogo", Icon: SiNextdotjs, color: "#ffffff", proficiency: 80 },
  { name: "Gestão Organizacional", Icon: SiReact, color: "#61dafb", proficiency: 90 },
  { name: "Condução Automóvel e Conhecimento de Motore", Icon: SiTailwindcss, color: "#38bdf8", proficiency: 85 },
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
  { year: "2024", title: "GWM ANGOLA - Director de Vendas", desc: "Gestão de Vendas, equipa, clientes e arquivos processuais interno e externo" },
  { year: "2024", title: "KHT - Gestor de Marketing", desc: "Desenvolvimento e Implementação de estratégias de Marketing" },
  { year: "2024", title: "Fundo Viana - Logístico", desc: "Operador de logistica interna e externa a empresa" },
  { year: "2025", title: "Supermercado MAXI - Operador de Caixa", desc: "Operacionabilidade eficiente do sistema de vendas no supermercado Maxi" },
  { year: "2026", title: "Empresa Arosfran - Gestor de Stock", desc: "Gerenciar as actividades relativos à logistica em stock" },
  { year: "2023", title: "Empresa Zinzi Comercial - Contador de Stock", desc: "Desenvolver sistema convencional de controlo de produtos em stock; supervisionar o armazenamento de produtos; contar, gerir e relatar a gestão de produtos em stock" },
];