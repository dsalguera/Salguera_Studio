"use client";

import { motion } from "framer-motion";
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
  SiSharp,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

const languages: Tech[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <SiSharp /> },
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

function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Tech[];
  reverse?: boolean;
  duration?: number;
}) {
  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">

      {/* Fade Left */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {list.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 hover:border-violet-400/40 hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            <div className="text-2xl text-violet-300">
              {tech.icon}
            </div>

            <span className="font-medium">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-[0.25em] text-violet-400 text-sm mb-4">
          TECH STACK
        </p>

        <h2 className="text-5xl font-black mb-6">
          Technologies I Work With
        </h2>

        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed mb-20">
          From front-end interfaces to backend systems, databases,
          cloud deployment and design tools, these are the technologies
          I use to build modern digital experiences.
        </p>

      </div>

      <Marquee
        items={languages}
        duration={40}
      />

      <Marquee
        items={frameworks}
        reverse
        duration={45}
      />

      <Marquee
        items={tools}
        duration={50}
      />

    </section>
  );
}