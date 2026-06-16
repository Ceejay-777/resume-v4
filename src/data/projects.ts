import futaverse_img from "../assets/projects/futaverse_architecture.png";

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
  gallery: string[];
  architecture?: string;
  hasArticle?: boolean;
  image?: string;
};

export const projects: Project[] = [
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
    gallery: [],
    image: futaverse_img,
  },

  {
    slug: "docuhealth",
    title: "DocuHealth",
    tagline: "Patient records, reimagined for African clinics.",
    description:
      "HIPAA-grade EMR with offline-first capture, structured clinical notes, and AI-assisted summarization for over-stretched clinicians.",
    role: "Backend Engineer",
    timeline: "2023 — 2024",
    stack: ["FastAPI", "PostgreSQL", "Pinecone", "OpenAI", "React"],
    achievement:
      "Reduced clinician documentation time by 41% across pilot clinics.",
    links: { github: "#", live: "#" },
    challenges: [
      {
        title: "Offline-first sync",
        body: "Designed a conflict-free replicated journal so devices stay productive on flaky networks.",
      },
      {
        title: "PII safety",
        body: "Field-level encryption with deterministic search indexes for vitals and identifiers.",
      },
    ],
    decisions: [
      {
        title: "RAG over local corpus",
        body: "Each clinic gets its own Pinecone namespace — patient context never crosses tenants.",
      },
      {
        title: "Event-sourced records",
        body: "Audit trail by construction; rollbacks are just replays.",
      },
    ],
    features: [
      "Offline capture",
      "Vitals charts",
      "AI summaries",
      "Role-based access",
      "Audit log",
    ],
    metrics: [
      { label: "Clinics", value: "12" },
      { label: "Docs time", value: "-41%" },
      { label: "Sync conflicts", value: "<0.2%" },
    ],
    gallery: [],
    architecture:
      "React PWA with IndexedDB queue, FastAPI gateway, PostgreSQL with row-level security, Pinecone for retrieval, OpenAI for summarization.",
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
    gallery: [],
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
    gallery: [],
    architecture:
      "Next.js client, FastAPI grader, Pinecone retrieval, Gemini for reasoning, Postgres of record.",
  },
  {
    slug: "erp-system",
    title: "Enterprise ERP",
    tagline: "An ERP that doesn't fight its users.",
    description:
      "Multi-tenant ERP covering inventory, HR, finance, and procurement — built modularly so each org turns on what they need.",
    role: "Engineering Lead",
    timeline: "2022 — 2024",
    stack: ["Django", "DRF", "PostgreSQL", "Redis", "Docker", "RBAC"],
    achievement:
      "Onboarded 5 enterprise tenants with zero downtime migrations.",
    challenges: [
      {
        title: "Multi-tenancy",
        body: "Schema-per-tenant with a shared identity plane and per-tenant migrations.",
      },
      {
        title: "Permission depth",
        body: "Fine-grained RBAC down to field-level visibility for finance modules.",
      },
    ],
    decisions: [
      {
        title: "Modular monolith",
        body: "Right-sized for the team — clean module boundaries today, services when load demands.",
      },
      {
        title: "Background-first writes",
        body: "Heavy writes go through Celery so the UI is always responsive.",
      },
    ],
    features: ["Inventory", "Payroll", "Procurement", "Approvals", "Reporting"],
    metrics: [
      { label: "Tenants", value: "5" },
      { label: "Modules", value: "9" },
      { label: "Downtime", value: "0m" },
    ],
    gallery: [],
    architecture:
      "Django modular monolith, schema-per-tenant Postgres, Celery + Redis, Dockerized deploys with blue/green migrations.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
