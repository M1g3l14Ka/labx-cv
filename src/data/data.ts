import { ISocial, ISkill, IValue, ITimelineItem } from "@/types/types";


export const socials: ISocial[] = [
  { id: 1, name: "Telegram", url: "https://t.me/M1g3L14Ka", icon: "✈️" },
  { id: 2, name: "VK", url: "https://vk.com/mi4aejl", icon: "💬" },
  { id: 3, name: "GitHub", url: "https://github.com/M1g3L14Ka", icon: "🐙" },
  { id: 4, name: "Email", url: "mailto:kasionma@gmail.com", icon: "📧" },
];

export const skills: ISkill[] = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript / JS(ES6+)", level: 70 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / Express", level: 80 },
  { name: "Prisma ORM", level: 75 },
  { name: "PostgreSQL / SQLite", level: 70 },
  { name: "Framer Motion", level: 85 },
  { name: "Shadcn/ui", level: 75 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
];

export const values: IValue[] = [
  { icon: "⚡", title: "Скорость", desc: "Оптимизация кода, быстрая загрузка, SSR/SSG" },
  { icon: "⭐", title: "Чистый код", desc: "TypeScript, типизация, многократно используемые компоненты, принципы SOLID" },
  { icon: "🤍", title: "Отношение", desc: "Каждый проект уникален. Анимация, UX, внимание к деталям" },
  { icon: "💼", title: "Надежность", desc: "Сроки это закон. Прозрачная коммуникация, предсказуемы результаты" },
];

export const petTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Pet',
    date: 'Sep 2024 - Present',
    title: 'Web-resume',
    subtitle: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Lucide React', 'Nodemailer'],
    description: 'This is my personal interactive resume designed to showcase my skills and projects. It features a modern dark UI with animated tile backgrounds, horizontal project gallery, and interactive elements throughout.',
    code: 'https://github.com/M1g3l14Ka/web-resume',
    link: 'https://resume.michaelkasion.ru/',
    img:'/petImg/web-resume.webp',
    isInProgress: false,
  },
  {
    id: 2,
    category: 'Pet',
    date: 'Mar 2026',
    title: 'Freelance CRM',
    subtitle: ['Next.js 16', 'TypeScript' , 'Prisma ORM', 'SQLite (local)', 'Turso/libSQL (production)', 'NextAuth.js v5', 'Tailwind CSS 4', 'Radix UI' ,'shadcn/ui', 'Recharts', 'Framer Motion', 'Gemini API', 'exchangerate-api.com'],
    description: 'A modern financial management CRM I built for freelancers to track projects, income, subscriptions, and get AI-powered insights.',
    code: 'https://github.com/M1g3l14Ka/freelance-crm',
    link: 'https://crm.michaelkasion.ru/',
    img:'/petImg/freelance-crm.webp',
    isInProgress: false,
  },
  {
    id: 3,
    category: 'Pet',
    date: 'Apr 2025',
    title: 'Lite-shop',
    subtitle: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Zustand + persist middleware', 'DummyJSON API', 'use-debounce'],
    description: 'This is a minimalist online store with simulated purchases. I created it as a pet project to improve my skills in modern frontend development, state management, and API interactions. The essence is clear from its name - lightweight, fast, and focused on the shopping experience.',
    code: 'https://github.com/M1g3l14Ka/lite-shop',
    link: 'https://shop.michaelkasion.ru/',
    img:'/petImg/lite-shop.webp',
    isInProgress: false,
  },
  {
    id: 4,
    category: 'Pet',
    date: 'Dec 2024',
    title: 'Seller cars',
    subtitle: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Playwright', 'Resend'],
    description: 'Premium used cars from South Korea - scraped from ENCAR.com',
    code: 'https://github.com/M1g3l14Ka/sellercars',
    link: 'https://sellercars.michaelkasion.ru/',
    img:'/petImg/million-cars.webp',
    isInProgress: false,
  },
  {
    id: 5,
    category: 'Pet',
    date: 'Mar 2026',
    title: 'The Nexus Portal',
    subtitle: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Framer Motion'],
    description: 'Creative portal with complex animations, glassmorphism UI and interactive background tiles.',
    code: 'https://github.com/M1g3l14Ka/the-nexus-portal',
    link: '/',
    img:'/petImg/nexus-portal.webp',
    isInProgress: true,
  },
];