import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Covenant Adeosun` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-semibold">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-brand">
        Back to writing
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-32 text-center">
      <h1 className="text-2xl font-semibold">Something broke</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="pt-12 pb-24">
      <div className="container-page max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All writing
        </Link>

        <header className="mt-8">
          <div className="font-mono text-xs uppercase tracking-wider text-brand">
            {post.category}
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/90">
          {post.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-1.5">
          {post.tags.map((t: string) => (
            <span
              key={t}
              className="rounded bg-surface-2 px-2 py-1 text-xs text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
