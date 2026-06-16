export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
  featured?: boolean;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "designing-rag-pipelines-that-actually-ship",
    title: "Designing RAG pipelines that actually ship",
    excerpt:
      "Most RAG demos collapse under real traffic. Here's the architecture we use to serve grounded answers under 4 seconds at p95.",
    category: "AI Systems",
    tags: ["RAG", "Pinecone", "Architecture"],
    readingTime: "9 min read",
    date: "Mar 2026",
    featured: true,
    body: [
      "There's a gulf between a notebook RAG demo and a system serving thousands of queries per minute. This post walks through the architecture, the failure modes, and the boring infrastructure choices that make the difference.",
      "Start with retrieval. The model is downstream of the index — if your chunks are sloppy, no amount of prompt engineering will save you. We chunk by semantic boundary, not token count, and we keep a hard ceiling on chunk size.",
      "Then there's the orchestration layer. Streaming, speculative retrieval, and tool-calling with structured outputs are what take latency from 'demo-friendly' to 'production-friendly'.",
    ],
  },
  {
    slug: "django-at-scale-the-modular-monolith",
    title: "Django at scale: the modular monolith",
    excerpt:
      "Microservices are not a reward — they're a tax. Here's how to keep a Django monolith clean, testable, and ready to split when (and only when) it's time.",
    category: "Backend",
    tags: ["Django", "Architecture"],
    readingTime: "12 min read",
    date: "Feb 2026",
    body: [
      "Modular monoliths get a bad rap because most are just monoliths with a folder structure.",
      "Real modularity means strict import rules, well-typed boundaries, and CI that fails when modules reach across each other.",
    ],
  },
  {
    slug: "oauth2-without-tears",
    title: "OAuth2 without tears",
    excerpt:
      "A practical, opinionated walkthrough of building OAuth2 with refresh rotation, PKCE, and short-lived access tokens.",
    category: "Security",
    tags: ["OAuth2", "Auth"],
    readingTime: "7 min read",
    date: "Jan 2026",
    body: [
      "OAuth2 is a framework, not a recipe. The recipe is what most teams need.",
      "We'll cover token storage, refresh rotation, and the boring middleware that makes it all safe.",
    ],
  },
  {
    slug: "background-jobs-celery-vs-rq-vs-arq",
    title: "Background jobs: Celery vs RQ vs Arq",
    excerpt:
      "A side-by-side of three Python job queues — when each one is the right pick, and the operational gotchas you only learn at 3am.",
    category: "Backend",
    tags: ["Celery", "Queues", "Python"],
    readingTime: "10 min read",
    date: "Dec 2025",
    body: [
      "Celery is powerful and complex. RQ is simple. Arq is async-first.",
      "Pick by the failure mode you can least afford.",
    ],
  },
  {
    slug: "react-patterns-that-survive-the-fifth-engineer",
    title: "React patterns that survive the fifth engineer",
    excerpt:
      "Component conventions, data-fetching primitives, and the boring rules that keep a React codebase readable as the team grows.",
    category: "Frontend",
    tags: ["React", "Patterns"],
    readingTime: "8 min read",
    date: "Nov 2025",
    body: [
      "The patterns that work at scale aren't clever — they're consistent.",
      "Here are the rules we enforce, and why.",
    ],
  },
  {
    slug: "system-design-payment-ledgers",
    title: "System design: payment ledgers",
    excerpt:
      "Double-entry accounting is the only ledger model that doesn't lie. Here's how to implement it in Postgres without losing your weekend.",
    category: "System Design",
    tags: ["Payments", "Postgres"],
    readingTime: "11 min read",
    date: "Oct 2025",
    body: [
      "Money state is the one part of your app that cannot be eventually consistent.",
      "Build the ledger first; build the product on top.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
