import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import MyProcess from "@/components/MyProcess";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-transparent">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <MyProcess />
    </main>
  );
}
