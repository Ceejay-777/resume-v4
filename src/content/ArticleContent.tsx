import { Suspense, lazy } from "react";
import { MDXProvider } from "@mdx-js/react";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-base font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-foreground/85" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-4 ml-5 list-disc space-y-1 text-foreground/85"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 ml-5 list-decimal space-y-1 text-foreground/85"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="my-6 border-l-2 border-brand pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-sm" {...props} />
  ),
};

function ArticleContent({ slug }: { slug: string }) {
  const Content = lazy(() => import(`../content/projects/${slug}.mdx`));
  return (
    <MDXProvider components={mdxComponents}>
      <Suspense
        fallback={
          <p className="text-sm text-muted-foreground">Loading article...</p>
        }
      >
        <Content />
      </Suspense>
    </MDXProvider>
  );
}

export default ArticleContent;