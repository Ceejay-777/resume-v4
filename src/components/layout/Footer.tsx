import { Link } from "@tanstack/react-router";
import { XCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-page py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-mono text-sm">covenant.dev</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Engineering systems that scale — from secure fintech to AI-native
            platforms. Built with care, in Lagos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Sitemap
            </div>
            <Link
              to="/projects"
              className="block text-foreground/80 hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="block text-foreground/80 hover:text-foreground"
            >
              Writing
            </Link>
            <Link
              to="/about"
              className="block text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/history"
              className="block text-foreground/80 hover:text-foreground"
            >
              History
            </Link>
          </div>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Elsewhere
            </div>
            <a
              href="https://github.com"
              className="block text-foreground/80 hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="block text-foreground/80 hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@covenant.dev"
              className="block text-foreground/80 hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <div className="flex gap-2 md:justify-end">
            {[XCircle, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Covenant Adeosun. Crafted with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
