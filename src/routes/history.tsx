import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { history } from "@/data/history";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — Covenant Adeosun" },
      {
        name: "description",
        content:
          "Release notes for this portfolio. Every version, every lesson, every regret.",
      },
      { property: "og:title", content: "Portfolio history — Covenant Adeosun" },
      {
        property: "og:description",
        content:
          "Release notes for this portfolio. Every version, every lesson, every regret.",
      },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <section className="pt-20 pb-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Changelog"
          title="The portfolio, version by version."
          description="A site is a product. This is the release log — design lessons and all."
        />

        <div className="mt-16 space-y-10">
          {history.map((h) => (
            <article
              key={h.version}
              className="rounded-2xl border border-border bg-surface p-8 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-brand">
                    {h.version}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {h.title}
                  </h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {h.date}
                </span>
              </div>

              <p className="mt-4 text-muted-foreground max-w-3xl">
                {h.summary}
              </p>

              <ul className="mt-6 space-y-1.5">
                {h.changes.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground/85">
                    <span className="text-brand">+</span> {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
