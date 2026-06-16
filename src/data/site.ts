import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiOpenai,
} from "react-icons/si";

export const site = {
  name: "Covenant Joshua Adeosun",
  short: "Covenant Adeosun",
  role: "Fullstack & Backend Engineer",
  location: "Nigeria",
  email: "hello@covenant.dev",
  bio: "I design and ship resilient backend systems and AI-native products — from secure fintech rails to enterprise ERPs trusted by regulated teams.",
  stats: [
    { label: "Years building", value: "4+" },
    { label: "Projects shipped", value: "10+" },
    { label: "Users impacted", value: "1k+" },
    { label: "Hackathons won", value: "2" },
  ],
};

export const coreTech = [
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiPython, label: "Python" },
    { icon: SiDjango, label: "Django" },
    { icon: SiFastapi, label: "FastAPI" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiRedis, label: "Redis" },
  ]

export const supportingTech = [
  { icon: SiDocker, label: "Docker" },
  { icon: SiNginx, label: "Nginx" },
  { icon: Workflow, label: "CI/CD" },
  { icon: Database, label: "Pinecone" },
  { icon: Code2, label: "RAG" },
  { icon: SiOpenai, label: "OpenAI" },
  { icon: Server, label: "Microservices" },
  { icon: Terminal, label: "Sentry" },
  { icon: Layout, label: "LangChain" },
];

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "TanStack Query",
    "Zod",
  ],
  Backend: ["Python", "Django", "DRF", "Flask", "FastAPI", "Node.js"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Supabase"],
  Infrastructure: [
    "Docker",
    "CI/CD",
    "OAuth2",
    "RBAC",
    "Microservices",
    "Swagger",
  ],
  AI: ["RAG", "OpenAI", "Gemini", "LangChain", "Embeddings", "OpenRouter"],
  DevOps: ["GitHub Actions", "Sentry", "Celery", "Nginx", "Linux"],
} as const;
