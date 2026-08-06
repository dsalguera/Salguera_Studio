"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  category: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Laravel + React CRUD System",
    description: "A full-stack product and order management platform with a Laravel API, React interface, MySQL database, authentication, inventory tracking, and responsive administration tools.",
    image: "/projects/project1.png",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    github: "https://github.com/yourrepo",
    live: "https://yourdemo.com",
    category: "Full Stack",
    year: "2026",
  },
  {
    title: "Cinepedia",
    description: "A responsive movie discovery platform with dynamic browsing, API integration, detailed movie pages, and a Node.js backend deployed online.",
    image: "/projects/project2.png",
    tech: ["React", "Node.js", "Tailwind CSS", "API"],
    github: "https://github.com/yourrepo2",
    live: "https://yourdemo2.com",
    category: "Web Application",
    year: "2025",
  },
  {
    title: "LuckyTimes Lottery System",
    description: "A Laravel-based lottery management system covering drawings, schedules, tickets, winning numbers, users, reports, and configurable game parameters.",
    image: "/projects/lottery.png",
    tech: ["Laravel", "PHP", "MySQL", "Sanctum"],
    github: "https://github.com/yourrepo3",
    category: "Backend System",
    year: "2025",
  },
  {
    title: "CNC Workflow System",
    description: "A practical digital fabrication workflow combining CNC machining, laser engraving, toolpath preparation, fixtures, vacuum workholding, and repeatable production methods.",
    image: "/projects/cnc.png",
    tech: ["Fusion 360", "VCarve", "LightBurn", "CNC"],
    category: "Digital Fabrication",
    year: "2026",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="theme-glow-primary pointer-events-none absolute -left-56 top-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[110px] sm:h-[720px] sm:w-[720px]" />
      <div className="theme-glow-secondary pointer-events-none absolute -right-56 top-[45%] h-[480px] w-[480px] rounded-full opacity-20 blur-[110px] sm:h-[680px] sm:w-[680px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
          <Link href="/" className="theme-text-muted group inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--text-primary)]">
            <FaArrowLeft className="accent-text text-xs transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>

          <p className="accent-text mt-10 text-sm font-medium uppercase tracking-[0.3em]">Projects</p>

          <h1 className="theme-text mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Selected work across
            <span className="accent-gradient-text block">software and fabrication.</span>
          </h1>

          <p className="theme-text-secondary mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            A collection of web applications, backend systems, automation workflows, and digital fabrication projects built through practical problem-solving.
          </p>
        </motion.div>

        <div className="mt-14 space-y-7 sm:mt-16 sm:space-y-9">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: index * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="theme-card group grid overflow-hidden rounded-[1.75rem] border lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`relative min-h-[260px] overflow-hidden border-b border-[var(--border)] sm:min-h-[360px] lg:min-h-[430px] lg:border-b-0 ${index % 2 !== 0 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-xl">{project.category}</span>
                  <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-xl">{project.year}</span>
                </div>
              </div>

              <div className={`relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_55%,rgba(var(--accent-rgb),0.045))]" />

                <div className="relative">
                  <p className="accent-text text-xs font-medium uppercase tracking-[0.22em]">Project {String(index + 1).padStart(2, "0")}</p>

                  <h2 className="theme-text mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">{project.title}</h2>

                  <p className="theme-text-secondary mt-5 text-sm leading-7 sm:text-base">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span key={technology} className="theme-surface theme-text-secondary rounded-full border px-3.5 py-2 text-xs font-medium">{technology}</span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="theme-secondary-button group/link inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]">
                        <FaGithub className="accent-text" />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="theme-primary-button group/link inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition">
                        Live Demo
                        <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/contact" className="theme-secondary-button group inline-flex items-center gap-3 rounded-full border px-6 py-3.5 font-medium transition hover:scale-[1.02]">
            Have a project in mind?
            <FaArrowRight className="accent-text text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}