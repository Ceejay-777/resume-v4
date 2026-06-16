import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Covenant Adeosun" },
      {
        name: "description",
        content:
          "A selection of backend, fullstack, and AI systems I've designed and shipped.",
      },
      { property: "og:title", content: "Projects — Covenant Adeosun" },
      {
        property: "og:description",
        content:
          "A selection of backend, fullstack, and AI systems I've designed and shipped.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="pt-20 pb-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've designed, built, and operated."
          description="Each project is a system — with constraints, decisions, and tradeoffs. Click through for the engineering story."
        />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-4 py-8 md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-10"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {p.timeline}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  {p.role}
                </div>
              </div>

              <div>
                <p className="text-foreground/85">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
