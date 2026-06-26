"use client";

import { motion } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaReact,
  FaPhp,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <SiSharp /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Laravel", icon: <SiLaravel /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold mb-12">
        Skills & Technologies
      </h2>

      <div className="space-y-12">
        {categories.map((category, i) => (
          <div key={i}>
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-zinc-300 mb-6">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="
                    bg-white/5
                    border border-white/10
                    p-6
                    rounded-2xl
                    backdrop-blur-lg
                    flex flex-col items-center gap-3
                  "
                >
                  <div className="text-4xl">
                    {skill.icon}
                  </div>

                  <span className="text-sm text-zinc-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}