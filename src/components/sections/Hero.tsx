import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { Star1 } from "iconsax-reactjs";
import ceejay from "../../assets/Ceejay-nobg.png";
import HeroFlipCard from "./HeroFlipCard";

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-28 pb-20">
      <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            I build
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient">
            Backend systems
            <br /> built to outlast the hype.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">{site.short}</span> — a
            fullstack engineer obsessed with reliable backends, clean
            architecture, AI systems that earn their keep and stunning UI{" "}
            <Star1
              className="inline-block h-4 w-4 align-middle mb-1"
              variant="Bulk"
              color="yellow"
            />{" "}
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 gap-2">
              <Link to="/projects">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <HeroFlipCard />
      </div>
    </section>
  );
}
