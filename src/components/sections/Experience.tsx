import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped"
          description="Five years of building, leading, and learning across fintech, healthtech, and AI."
        />

        <ol className="mt-14 relative border-l border-border pl-8 space-y-12">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-9.25 top-2 grid h-3 w-3 place-items-center rounded-full border border-border bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {e.role}{" "}
                  <span className="text-muted-foreground font-normal">
                    · {e.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {e.period}
                </span>
              </div>

              <p className="mt-2 text-muted-foreground max-w-3xl">
                {e.summary}
              </p>

              <ul className="mt-4 space-y-1.5">
                {e.impact.map((i) => (
                  <li key={i} className="text-sm text-foreground/85 flex gap-2">
                    <span className="text-brand">—</span> {i}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
