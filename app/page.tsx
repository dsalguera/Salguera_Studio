import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhatIBuild from "@/components/WhatIBuild";
import CTA from "@/components/CTA";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="pt-24">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="contact">
        <CTA />
      </section>
    </main>
  );
}