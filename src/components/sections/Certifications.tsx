import { Award } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <SectionHeader eyebrow="Recognition" title="Awards & credentials" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-foreground/20"
            >
              <div className="grid h-9 w-9 place-items-center rounded-md bg-surface-2 text-brand">
                <Award className="h-4 w-4" />
              </div>
              <div className="mt-4 text-base font-medium leading-snug">
                {c.title}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {c.org} · {c.year}
              </div>
              <p className="mt-3 text-sm text-foreground/75">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
