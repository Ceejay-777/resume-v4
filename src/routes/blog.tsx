import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { posts } from "@/data/blog";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Covenant Adeosun" },
      {
        name: "description",
        content:
          "Notes on backend engineering, system design, RAG, Django, and React patterns that survive growth.",
      },
      { property: "og:title", content: "Writing — Covenant Adeosun" },
      {
        property: "og:description",
        content:
          "Notes on backend engineering, system design, RAG, Django, and React patterns.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [],
  );

  const filtered = posts.filter((p) => {
    const q = query.toLowerCase();
    const match =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const c = !cat || p.category === cat;
    return match && c;
  });

  const featured = posts.find((p) => p.featured);

  return (
    <section className="pt-20 pb-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Writing"
          title="Field notes from real systems."
          description="Engineering essays on backend, AI, and architecture — written from the trenches, not the cloud."
        />

        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="mt-12 block rounded-2xl border border-border bg-surface p-8 md:p-12 hover:border-foreground/20 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-brand">
              Featured · {featured.category}
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {featured.excerpt}
            </p>
            <div className="mt-5 text-xs text-muted-foreground font-mono">
              {featured.date} · {featured.readingTime}
            </div>
          </Link>
        )}

        <div className="mt-14 flex flex-wrap items-center gap-3 justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              className="pl-9 h-10 bg-surface"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCat(null)}
              className={`rounded-md px-3 py-1.5 text-xs border transition-colors ${
                !cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-md px-3 py-1.5 text-xs border transition-colors ${
                  cat === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-xl border border-border bg-surface p-6 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono uppercase tracking-wider text-brand">
                  {p.category}
                </span>
                <span>{p.readingTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {p.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            No posts match your search.
          </div>
        )}
      </div>
    </section>
  );
}
