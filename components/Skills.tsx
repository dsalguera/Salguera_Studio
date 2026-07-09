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


function TechCard({
  tech,
  index,
}: {
  tech: Tech;
  index: number;
}) {
  return (
    <motion.div
      animate={{
        y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
      }}
      transition={{
        duration: 4 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        rotateX: 8,
        rotateY: -8,
        y: -10,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="group relative flex items-center gap-4 px-5 py-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(139,92,246,.18)] whitespace-nowrap"
    >

      {/* Glass reflection */}
      <motion.div
        animate={{
          x: ["-250%", "250%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.3,
        }}
        className="absolute inset-y-0 w-14 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
      />


      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.25,
          rotate: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="relative z-10 text-3xl text-violet-300 group-hover:text-white transition-colors"
      >
        {tech.icon}
      </motion.div>


      {/* Name */}
      <span className="relative z-10 text-white font-medium tracking-wide">
        {tech.name}
      </span>

    </motion.div>
  );
}


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
    <div className="overflow-hidden [perspective:1200px]">

      <motion.div
        className="flex items-center gap-5 w-max"
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
          <TechCard
            key={index}
            tech={tech}
            index={index}
          />
        ))}
      </motion.div>

    </div>
  );
}


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-violet-400 text-sm mb-4">
          TECH STACK
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Building with modern technologies.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          From low-level programming languages to modern frontend
          frameworks, backend systems, databases, deployment,
          and design tools.
        </p>

      </div>


      <div className="mt-16 space-y-6">

        <Marquee
          items={languages}
          duration={42}
        />

        <Marquee
          items={frameworks}
          reverse
          duration={48}
        />

        <Marquee
          items={tools}
          duration={55}
        />

      </div>

    </section>
  );
}