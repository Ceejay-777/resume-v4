import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, XCircle } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import ArticleContent from "@/content/ArticleContent";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    console.log("loader hit, slug:", params.slug);
    const project = getProject(params.slug);
    console.log("project found:", project);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Covenant Adeosun` },
          { name: "description", content: loaderData.project.tagline },
          {
            property: "og:title",
            content: `${loaderData.project.title} — Covenant Adeosun`,
          },
          { property: "og:description", content: loaderData.project.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-brand">
        Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-32 text-center">
      <h1 className="text-2xl font-semibold">Something broke</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  console.log("PROJECT DETAIL");

  return (
    <article className="py-12">
      <div className="container-page">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-wider text-brand">
            {project.role} · {project.timeline}
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links?.live && (
              <a
                href={project.links.live}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm hover:border-foreground/30"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm hover:border-foreground/30"
              >
                <XCircle className="h-3.5 w-3.5" /> Source
              </a>
            )}
          </div>
        </header>

        {/* <div className="mt-10 relative aspect-16/8  rounded-2xl border border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 bg-linear-to-tr from-(--brand)/20 via-transparent to-transparent" />
          {project.image ? (
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface object-contain">
              <img
                src={project.image}
                alt={project.title.toLowerCase().replace(/\s+/g, "-")  + " architecture"}
                className="w-full"
              />
            </div>
          ) : (
            <div className="absolute inset-0 grid place-items-center font-mono text-sm text-muted-foreground">
              {project.title.toLowerCase().replace(/\s+/g, "-")}
              .architecture.svg
            </div>
          )}
        </div> */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <Block label="Role">{project.role}</Block>
            <Block label="Timeline">{project.timeline}</Block>
            <Block label="Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s: string) => (
                  <span
                    key={s}
                    className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Block>
            {project.metrics && (
              <Block label="Metrics">
                <ul className="space-y-1.5 text-sm">
                  {project.metrics.map(
                    (m: { label: string; value: string }) => (
                      <li key={m.label} className="flex justify-between">
                        <span className="text-muted-foreground">{m.label}</span>
                        <span className="text-foreground font-medium">
                          {m.value}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </Block>
            )}
          </aside>

          <div className="space-y-14 max-w-2xl">
            {project.hasArticle ? (
              // Long-form article from MDX
              <ArticleContent slug={project.slug} />
            ) : (
              <>
                <Section title="Overview">
                  <p>{project.description}</p>
                </Section>

                <Section title="Architecture">
                  <p>{project.architecture}</p>
                </Section>

                {project.challenges && (
                  <Section title="Engineering challenges">
                    <div className="space-y-6">
                      {project.challenges.map(
                        (c: { title: string; body: string }) => (
                          <div key={c.title}>
                            <h4 className="text-base font-medium text-foreground">
                              {c.title}
                            </h4>
                            <p className="mt-1.5 text-muted-foreground">
                              {c.body}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </Section>
                )}

                {project.decisions && (
                  <Section title="System design decisions">
                    <div className="space-y-6">
                      {project.decisions.map(
                        (c: { title: string; body: string }) => (
                          <div key={c.title}>
                            <h4 className="text-base font-medium text-foreground">
                              {c.title}
                            </h4>
                            <p className="mt-1.5 text-muted-foreground">
                              {c.body}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </Section>
                )}

                {project.features && (
                  <Section title="Key features">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((f: string) => (
                        <li
                          key={f}
                          className="rounded-md border border-border bg-surface px-3 py-2 text-sm"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 flex items-center justify-between border-border border-t">
          <span className="text-sm text-muted-foreground">Up next</span>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="text-lg font-medium hover:text-brand "
          >
            {next.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-sm text-foreground">{children}</div>
    </div>
  );
}
