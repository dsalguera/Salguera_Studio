"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website (This Site)",
    description:
      "Modern developer portfolio built with Next.js, Framer Motion, and Nodemailer contact system.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Nodemailer"],
    github: "https://github.com/",
    live: "https://yourdomain.com",
  },
  {
    title: "Laravel E-commerce System",
    description:
      "Full CRUD system with MySQL database, product management, and admin dashboard.",
    image: "/projects/laravel.png",
    tech: ["Laravel", "MySQL", "PHP"],
    github: "https://github.com/",
  },
  {
    title: "CNC & Laser Workflow System",
    description:
      "Workflow setup for Shapeoko Pro XXL and Laser Tree K30 using LightBurn and Fusion 360.",
    image: "/projects/cnc.png",
    tech: ["Fusion 360", "LightBurn", "CNC"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={i}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                overflow-hidden
                backdrop-blur-lg
                hover:bg-white/10
                transition-all
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-white/10
                        border border-white/10
                        text-zinc-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        text-sm
                        px-4
                        py-2
                        rounded-xl
                        border border-white/20
                        hover:bg-white/10
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="
                        text-sm
                        px-4
                        py-2
                        rounded-xl
                        bg-white text-black
                        hover:opacity-80
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}