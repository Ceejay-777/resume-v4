import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../app.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import { ThemeProvider } from "@/components/theme-provider";

function NotFoundComponent() {
  return (
    <div className="container-page py-32 text-center">
      <div className="font-mono text-xs uppercase tracking-wider text-brand">
        404
      </div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The route you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
      >
        Back home
      </a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="container-page py-32 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Something broke</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Covenant Joshua Adeosun — Fullstack & Backend Engineer" },
        {
          name: "description",
          content:
            "Portfolio of Covenant Joshua Adeosun — fullstack and backend engineer building reliable systems, AI-native products, and enterprise platforms.",
        },
        { name: "author", content: "Covenant Joshua Adeosun" },
        {
          property: "og:title",
          content: "Covenant Joshua Adeosun — Fullstack & Backend Engineer",
        },
        {
          property: "og:description",
          content: "Backend systems built to outlast the hype.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Background />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
