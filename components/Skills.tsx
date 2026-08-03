"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiLaravel,
  SiFigma,
  SiVercel,
  SiHostinger,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

const languages: Tech[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
];

const frameworks: Tech[] = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

const tools: Tech[] = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Hostinger", icon: <SiHostinger /> },
];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className="group relative flex shrink-0 items-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 backdrop-blur-md transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.08] hover:shadow-[0_10px_35px_rgba(139,92,246,0.12)] sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-violet-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <motion.div
        whileHover={{ scale: 1.15, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative z-10 text-2xl text-violet-300 transition-colors duration-300 group-hover:text-white sm:text-3xl"
      >
        {tech.icon}
      </motion.div>

      <span className="relative z-10 text-sm font-medium tracking-wide text-white sm:text-base">
        {tech.name}
      </span>
    </motion.div>
  );
}

function TechGroup({
  items,
  hidden = false,
}: {
  items: Tech[];
  hidden?: boolean;
}) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5">
      {items.map((tech) => (
        <TechCard key={`${hidden ? "copy" : "original"}-${tech.name}`} tech={tech} />
      ))}
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  duration = 45,
}: {
  items: Tech[];
  reverse?: boolean;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className="flex w-max transform-gpu items-center will-change-transform"
        animate={
          reduceMotion
            ? undefined
            : {
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={{
          x: {
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <TechGroup items={items} />
        <TechGroup items={items} hidden />
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
          Tech Stack
        </p>

        <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
          Technologies I work with.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
          Programming languages, frameworks, databases, deployment platforms,
          and creative tools used across my projects.
        </p>
      </div>

      <div className="mt-10 space-y-2 py-6 sm:mt-12 sm:space-y-3 sm:py-8">
        <Marquee items={languages} duration={52} />
        <Marquee items={frameworks} reverse duration={46} />
        <Marquee items={tools} duration={50} />
      </div>
    </section>
  );
}