import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { posts } from "@/data/blog";

export function BlogPreview() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const others = posts.filter((p) => p.slug !== featured.slug).slice(0, 3);

  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Writing" title="Notes from the codebase" />
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
          >
            Read all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group rounded-2xl border border-border bg-surface p-7 md:p-9 transition-colors hover:border-foreground/20"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-brand">
              {featured.category}
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              {featured.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readingTime}</span>
            </div>
          </Link>

          <div className="space-y-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block rounded-xl border border-border bg-surface p-5 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <span>{p.readingTime}</span>
                </div>
                <h4 className="mt-2 text-lg font-medium leading-snug">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
