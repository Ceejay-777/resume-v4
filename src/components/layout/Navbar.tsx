import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import ceejay from "../../assets/Ceejay.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/history", label: "History" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <div className="grid h-9 w-9 place-items-center rounded-md dark:border-2 border-background overflow-hidden shadow-sm">
            <img
              src={ceejay}
              alt="Ceejay"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden sm:inline text-foreground">
            covenant<span className="text-muted-foreground">.dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 border-x ml-auto mr-4 ">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          {/* <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex h-9 gap-1.5"
          >
            <a href="/resume.pdf" download>
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/90 absolute inset-x-0 top-full z-50">
          <div className="container-page flex flex-col py-3 bg-background/20">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted bg-background/20"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
