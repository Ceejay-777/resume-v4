export const experience = [
  {
    company: "Fowgate LLC",
    role: "Engineering Lead, Backend",
    period: "2024 — Present",
    summary:
      "Leading platform engineering for an AI-native productivity suite. Owning architecture, hiring, and reliability for the backend.",
    impact: [
      "Cut p95 API latency from 720ms to 180ms",
      "Established CI/CD with preview environments per PR",
      "Mentored 4 engineers; introduced RFC process",
    ],
    stack: ["FastAPI", "Postgres", "Pinecone", "Docker", "GitHub Actions"],
  },
  {
    company: "DocuHealth Services",
    role: "Backend Engineer",
    period: "2023 — 2024",
    summary:
      "Shipped offline-first EMR and clinical AI tools serving pilot clinics across West Africa.",
    impact: [
      "Reduced clinician documentation time by 41%",
      "Designed field-level encryption and audit log",
      "Owned tenant isolation in Pinecone + Postgres",
    ],
    stack: ["FastAPI", "PostgreSQL", "OpenAI", "React PWA"],
  },
  {
    company: "Evidence Loop",
    role: "Fullstack Engineer",
    period: "2023",
    summary: "Built rapid data-collection tooling for civic research teams.",
    impact: [
      "Launched survey runtime in 6 weeks",
      "Integrated SMS + USSD fallbacks",
    ],
    stack: ["Django", "DRF", "Next.js"],
  },
  {
    company: "Smart Systems Research Laboratory",
    role: "Research Engineer",
    period: "2022 — 2023",
    summary: "Prototyped embedded + ML pipelines for sensing applications.",
    impact: [
      "Co-authored two internal whitepapers",
      "Productionised a model serving pipeline",
    ],
    stack: ["Python", "TensorFlow", "Flask"],
  },
  {
    company: "Kinplus Technologies",
    role: "Software Engineer Intern",
    period: "2021 — 2022",
    summary:
      "First production work — internal tooling, dashboards, and database migrations.",
    impact: [
      "Shipped 3 internal tools",
      "Wrote test suites covering 70% of legacy code",
    ],
    stack: ["Django", "PostgreSQL", "jQuery"],
  },
] as const;
