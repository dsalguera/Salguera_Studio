"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category?: string;
};

const projects: Project[] = [
  {
    title: "NOVA Academy",
    description:
      "A modern, fully responsive educational landing page developed from a visual design concept. Built with HTML, CSS, and JavaScript, featuring a Human × Technology visual identity, interactive elements, and immersive layouts.",
    image: "/projects/nova-academy.webp",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/dsalguera/NOVA_Studio",
    live: "https://dsalguera.github.io/NOVA_Studio/",
    featured: true,
    category: "UI TO CODE",
  },
  {
    title: "Food Lovers",
    description:
      "A modern, responsive food and restaurant landing page focused on engaging visuals, clean layouts, and intuitive navigation. A creative design concept transformed into an engaging web experience.",
    image: "/projects/food-lovers.webp",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/dsalguera/Food_Lovers",
    live: "https://dsalguera.github.io/Food_Lovers/",
    featured: true,
    category: "UI TO CODE",
  },
  {
    title: "LuckyTimes V3",
    description:
      "A modern full-stack lottery management platform featuring an interactive dashboard, drawing schedules, results management, administrative tools, and responsive interfaces designed for real-world operations.",
    image: "/projects/luckytimes.webp",
    tech: ["Next.js", "React", "TypeScript", "MySQL"],
    github: "https://github.com/dsalguera/LuckyTimesV3",
    live: "https://luckytimes.salguerastudio.com/",
    featured: true,
    category: "FULL STACK",
  },
  {
    title: "Cinepedia",
    description:
      "A responsive movie discovery platform with dynamic browsing, API integration, detailed movie pages, and a Node.js backend deployed online.",
    image: "/projects/cinepedia.svg",
    tech: ["React", "Node.js", "Tailwind CSS", "API"],
    github: "https://github.com/dsalguera/cinepedia_movies",
    live: "https://cinepedia.salguerastudio.com/",
    featured: true,
    category: "WEB APPLICATION",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      {/* Ambient glow */}
      <div className="theme-glow-primary pointer-events-none absolute -left-52 top-1/3 h-[440px] w-[440px] rounded-full opacity-20 blur-[100px] sm:h-[650px] sm:w-[650px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="accent-text mb-4 text-sm font-medium uppercase tracking-[0.3em]">
              Featured Projects
            </p>

            <h2 className="theme-text text-3xl font-black tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Selected work across
              <span className="accent-gradient-text block">
                development and design.
              </span>
            </h2>

            <p className="theme-text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              A collection of web experiences, applications, and creative
              solutions combining modern development technologies with
              thoughtful design.
            </p>
          </div>

          <Link
            href="/projects"
            className="theme-secondary-button group inline-flex w-full items-center justify-center gap-3 rounded-full border px-6 py-3 font-medium transition duration-300 hover:scale-[1.02] sm:w-auto"
          >
            View all projects

            <FaArrowRight className="accent-text text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className={`theme-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${
                project.featured ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                    Featured
                  </span>
                )}

                {/* Category badge */}
                {project.category && (
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                    {project.category}
                  </span>
                )}
              </div>

              {/* Project content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="theme-text text-xl font-bold leading-tight sm:text-2xl">
                  {project.title}
                </h3>

                <p className="theme-text-secondary mt-3 text-sm leading-6 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="theme-surface theme-text-secondary rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-secondary-button group/link inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 hover:scale-[1.02]"
                    >
                      <FaGithub className="accent-text" />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-primary-button group/link inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300"
                    >
                      Live Demo

                      <FaArrowUpRightFromSquare className="text-xs transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}