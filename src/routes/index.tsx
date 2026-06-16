import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Covenant Adeosun — Fullstack & Backend Engineer" },
      {
        name: "description",
        content:
          "Backend systems built to outlast the hype. Portfolio of Covenant Joshua Adeosun.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Certifications />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
