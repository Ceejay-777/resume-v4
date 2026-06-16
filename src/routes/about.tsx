import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Covenant Adeosun" },
      {
        name: "description",
        content:
          "Engineer, lead, and lifelong builder. Here's what I care about and how I work.",
      },
      { property: "og:title", content: "About — Covenant Adeosun" },
      {
        property: "og:description",
        content:
          "Engineer, lead, and lifelong builder. Here's what I care about and how I work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12">
        <div className="container-page max-w-3xl">
          <SectionHeader
            eyebrow="About"
            title="I build software that holds up under pressure."
          />

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              I'm Covenant Joshua Adeosun. I work as a fullstack and backend
              engineer — most of my time is spent on the backend: APIs, data
              models, infrastructure, and the boring rules that make systems
              trustworthy.
            </p>
            <p>
              I've shipped enterprise ERPs, healthtech platforms, fintech rails,
              and AI-native products. Across all of them, the constant is the
              same: clean primitives, strict boundaries, fast feedback loops,
              and a stubborn refusal to ship something I wouldn't be willing to
              be paged for.
            </p>
            <p>
              I lead engineering teams the way I write code — with care,
              opinions, and a bias toward writing things down. I believe RFCs
              save weekends, that observability is a feature, and that the best
              architectures are the ones the next engineer can understand
              without you in the room.
            </p>
            <p>
              Outside the IDE I read systems papers, write essays on backend
              craft, and mentor engineers earlier in their journey. If any of
              that resonates, I'd love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Based in", value: "Lagos, Nigeria" },
              { label: "Open to", value: "Senior · Lead roles" },
              { label: "Email", value: "hello@covenant.dev" },
            ].map((b) => (
              <div
                key={b.label}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {b.label}
                </div>
                <div className="mt-2 text-foreground">{b.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <Certifications />
    </>
  );
}
