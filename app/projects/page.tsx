"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Laravel + React CRUD",
    description: "Full-stack system with authentication and API",
    github: "https://github.com/yourrepo",
    demo: "https://yourdemo.com",
    image: "/projects/project1.png",
  },
  {
    title: "CNC Automation Tool",
    description: "Toolpath optimization for Shapeoko workflows",
    github: "https://github.com/yourrepo2",
    demo: "https://yourdemo2.com",
    image: "/projects/project2.png",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-10 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </motion.div>
  );
}