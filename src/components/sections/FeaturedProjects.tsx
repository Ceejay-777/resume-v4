import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Magic I've created"
            description="A few projects where engineering decisions made the product possible."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
          >
            All projects <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, idx) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all hover:border-foreground/20 hover:bg-surface-2 ${idx === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="text-brand">{p.role}</span> · {p.timeline}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{p.tagline}</p>

              <div className="mt-6 rounded-lg border border-border bg-background/40 p-4">
                <div className="font-mono text-xs uppercase tracking-wider text-brand">
                  Key result
                </div>
                <div className="mt-1 text-sm text-foreground/90">
                  {p.achievement}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
