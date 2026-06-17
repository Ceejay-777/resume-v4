import futaverse_img from "@/assets/projects/futaverse_architecture.png";
import docuhealth_img from "@/assets/projects/docuhealth.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  timeline: string;
  stack: string[];
  achievement: string;
  links?: { github?: string; live?: string };
  challenges?: { title: string; body: string }[];
  decisions?: { title: string; body: string }[];
  features?: string[];
  metrics?: { label: string; value: string }[];
  architecture?: string;
  hasArticle?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "docuhealth",
    title: "DocuHealth",
    hasArticle: true,
    tagline: "Building interoperable healthcare records for Nigeria.",
    description:
      "A healthcare platform designed to connect patients, hospitals, laboratories, pharmacies, and clinics through a unified Health Identification Number (HIN), enabling secure and interoperable medical records.",
    role: "Lead Backend Engineer",
    timeline: "2024 — Present",
    stack: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Supabase",
      "Paystack",
      "JWT",
      "Sentry",
    ],
    achievement:
      "Led backend development of a healthcare platform currently serving multiple hospitals and hundreds of patients.",
    links: {
      live: "https://docuhealthservices.net/",
    },
    image: docuhealth_img,
  },

  {
    slug: "fowgate",
    title: "Fowgate ERP",
    hasArticle: true,
    tagline: "Enterprise resource planning, rebuilt from the ground up.",
    description:
      "A full-scale ERP platform for enterprises across oil and gas, tech, law, and real estate. Covers HR, payroll, real estate management, AI integrations, and more. Built by a four-person team with me as the sole backend developer and later technical lead.",
    role: "Lead Backend Engineer",
    timeline: "2025 - 2026",
    stack: [
      "Flask",
      "MongoDB",
      "Flask-RESTX",
      "Gemini",
      "Pinecone",
      "OAuth2",
      "Google APIs",
    ],
    achievement:
      "Sole backend developer on an enterprise ERP suite spanning HR, payroll, real estate, and AI itegration and more. Later promoted to technical lead coordinating a five-person team.",
    links: { live: "https://fowgate.com/" },
  },

  {
    slug: "futaverse",
    hasArticle: true,
    title: "FutaVerse",
    tagline: "Connecting students, mentors, alumni, and opportunities.",
    description:
      "A platform designed for the FUTA community that brings together internships, mentorships, events, ticketing, engagement tracking, and student networking in a single ecosystem.",
    role: "Backend Engineer",
    timeline: "2025 — Present",
    stack: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Django Q2",
      "SSE",
      "Redis",
      "WebSockets",
      "Paystack",
    ],
    achievement:
      "Designed and built the backend powering the MVP, including payments, ticketing, mentorships, internships, notifications, and role-based access control.",

    links: {
      github: "https://github.com/futaverse/futaverse-backend",
      live: "https://futaverse-backend-3.onrender.com",
    },
    image: futaverse_img,
  },

  {
    slug: "splitpay",
    title: "Splitpay",
    tagline: "Group payments without the awkward math.",
    description:
      "A fintech-grade splitter that handles BNPL, refunds, and partial payouts across multiple wallets and rails.",
    role: "Fullstack Engineer",
    timeline: "2023",
    stack: ["Django", "Celery", "PostgreSQL", "Redis", "Paystack"],
    achievement: "Processed ₦42M in volume in the first 90 days post-launch.",
    challenges: [
      {
        title: "Idempotency",
        body: "Every money-moving endpoint uses idempotency keys with a Redis-backed store.",
      },
      {
        title: "Webhook reliability",
        body: "Outbox pattern + signed retries for payment provider callbacks.",
      },
    ],
    decisions: [
      {
        title: "Double-entry ledger",
        body: "Every transfer is two journal lines — the math is auditable by definition.",
      },
      {
        title: "Saga orchestrator",
        body: "Multi-rail payouts coordinated with compensating actions on failure.",
      },
    ],
    features: [
      "Group splits",
      "Partial refunds",
      "Multi-wallet",
      "Audit log",
      "Provider failover",
    ],
    metrics: [
      { label: "Volume", value: "₦42M" },
      { label: "Success rate", value: "99.7%" },
      { label: "Disputes", value: "0.03%" },
    ],
    // gallery: [],
    architecture:
      "Django services, Celery workers, Postgres ledger, Redis queues, Paystack + bank rails behind an adapter layer.",
  },
  {
    slug: "learnexo",
    title: "LearNexo",
    tagline: "An AI tutor that actually grades reasoning.",
    description:
      "RAG-powered learning platform with structured rubrics, automated grading, and teacher review tooling.",
    role: "Fullstack Engineer",
    timeline: "2024",
    stack: ["Next.js", "FastAPI", "Pinecone", "Gemini", "PostgreSQL"],
    achievement:
      "Graded 60k+ submissions with 94% teacher-agreement on rubric scores.",
    challenges: [
      {
        title: "Faithful grading",
        body: "Constrained the model with rubric-as-tool calls; refused to grade without retrieval grounding.",
      },
      {
        title: "Latency",
        body: "Streaming + speculative retrieval keep median grading time under 4s.",
      },
    ],
    decisions: [
      {
        title: "Rubric-first prompts",
        body: "Teachers author rubrics — prompts are derived, not freestyle.",
      },
      {
        title: "Teacher-in-the-loop",
        body: "Grades land in a review queue before students see them.",
      },
    ],
    features: [
      "Auto-grading",
      "Rubric editor",
      "Teacher review",
      "Analytics",
      "Plagiarism flags",
    ],
    metrics: [
      { label: "Submissions", value: "60k+" },
      { label: "Agreement", value: "94%" },
      { label: "Median grade time", value: "3.8s" },
    ],
    // gallery: [],
    architecture:
      "Next.js client, FastAPI grader, Pinecone retrieval, Gemini for reasoning, Postgres of record.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
