import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Kind words"
          title="From people I've shipped with"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-border bg-surface p-7 md:p-8 transition-colors hover:border-foreground/20"
            >
              <Quote className="h-5 w-5 text-brand" />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-surface-2 text-sm font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
