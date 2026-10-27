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
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 24,
      }}
      className="theme-item group relative flex shrink-0 items-center gap-3 overflow-hidden whitespace-nowrap rounded-full border px-5 py-3 sm:px-6"
    >
      {/* Accent reflection */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--accent-rgb),0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.14,
          rotate: -5,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="accent-text relative z-10 text-2xl transition-colors duration-300 sm:text-3xl"
      >
        {tech.icon}
      </motion.div>

      {/* Name */}
      <span className="theme-text relative z-10 text-sm font-medium tracking-wide sm:text-base">
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
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5"
    >
      {items.map((tech) => (
        <TechCard
          key={`${hidden ? "copy" : "original"}-${tech.name}`}
          tech={tech}
        />
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
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[var(--page-background)] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[var(--page-background)] to-transparent sm:w-24" />

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
    <section
      id="skills"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient glow */}
      <div className="theme-glow-primary pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px] sm:h-[620px] sm:w-[620px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Label */}
        <p className="accent-text mb-4 text-sm font-medium uppercase tracking-[0.3em]">
          Tech Stack
        </p>

        {/* Heading */}
        <h2 className="theme-text text-3xl font-black tracking-[-0.035em] sm:text-4xl md:text-5xl">
          Technologies I work with.
        </h2>

        {/* Description */}
        <p className="theme-text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          Programming languages, frameworks, databases, deployment platforms,
          and creative tools used across my projects.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="relative mt-10 space-y-2 py-6 sm:mt-12 sm:space-y-3 sm:py-8">
        <Marquee items={languages} duration={52} />
        <Marquee items={frameworks} reverse duration={46} />
        <Marquee items={tools} duration={50} />
      </div>
    </section>
  );
}