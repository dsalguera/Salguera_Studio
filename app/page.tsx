import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-transparent">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <CTA />
    </main>
  );
}