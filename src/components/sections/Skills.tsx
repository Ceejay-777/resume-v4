import { SectionHeader } from "@/components/SectionHeader";
import { skills, supportingTech, coreTech } from "@/data/site";
import SkillIcon from "../SkillIcon";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section className="py-24 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Toolkit"
          title="My bag of magic tricks"
          description="Frontend, backend, infra, and AI. Chosen for reliability and speed over trends."
        />

        <section className="w-full py-10 overflow-hidden border-y border-border/40 bg-secondary/30 relative flex flex-col gap-8 mt-4">
          <div className="flex w-max space-x-12 px-6 animate-[scroll_30s_linear_infinite]">
            {coreTech.map((tech, i) => (
              <SkillIcon key={`dup-${i}`} tech={tech} i={i} />
            ))}
            {coreTech.map((tech, i) => (
              <SkillIcon key={`dup-${i}`} tech={tech} i={i} />
            ))}
          </div>

          <div className="flex w-max space-x-12 px-6 animate-[scroll-reverse_30s_linear_infinite]">
            {supportingTech.map((tech, i) => (
              <SkillIcon key={`dup-${i}`} tech={tech} i={i} />
            ))}
            {supportingTech.map((tech, i) => (
              <SkillIcon key={`dup-${i}`} tech={tech} i={i} />
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items]) => (
            <div
              key={group}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-brand">
                {group}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-yellow-500">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
