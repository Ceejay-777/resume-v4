export const history = [
  {
    version: "v5.0",
    date: "May 2026",
    title: "The Quiet Rewrite",
    summary:
      "Full rebuild on TanStack Start. New design system, typography-first hierarchy, restrained motion, and a dedicated history page.",
    changes: [
      "New design system grounded in OKLCH and semantic tokens",
      "Restrained motion — subtle fades only",
      "Engineering-focused project case studies",
      "Editorial blog layout with categories and reading time",
    ],
  },
  {
    version: "v4.0",
    date: "Aug 2025",
    title: "The Showcase",
    summary:
      "Refocused around case studies and metrics. Introduced sticky project sidebars and architecture notes.",
    changes: [
      "Project detail pages",
      "Architecture diagrams",
      "Testimonials section",
    ],
  },
  {
    version: "v3.0",
    date: "Jan 2025",
    title: "The Dark Era",
    summary:
      "First dark-mode-first design. Heavy gradients and animation — fun, but loud.",
    changes: [
      "Dark mode default",
      "Framer Motion everywhere",
      "Bento grid layouts",
    ],
  },
  {
    version: "v2.0",
    date: "Mar 2024",
    title: "The Resume Page",
    summary:
      "A single long page with timeline and projects. Functional, not yet beautiful.",
    changes: ["Timeline component", "Project cards", "Contact form"],
  },
  {
    version: "v1.0",
    date: "Sep 2022",
    title: "Hello, World",
    summary: "First portfolio — built in a weekend with vanilla HTML and CSS.",
    changes: ["Static HTML/CSS", "Hosted on GitHub Pages"],
  },
] as const;
