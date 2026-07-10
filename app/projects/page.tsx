"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Laravel + React CRUD",
    description:
      "Full-stack CRUD application built with Laravel, React, MySQL, authentication, REST APIs, and responsive UI.",

    image: "/projects/project1.png",

    tech: [
      "Laravel",
      "React",
      "MySQL",
      "REST API",
    ],

    github: "https://github.com/yourrepo",

    live: "https://yourdemo.com",

    featured: true,

    category: "Full Stack",
  },

  {
    title: "CNC Automation Tool",

    description:
      "Workflow automation and toolpath optimization for Shapeoko Pro XXL, Fusion 360, and Laser Tree K30.",

    image: "/projects/project2.png",

    tech: [
      "Fusion 360",
      "LightBurn",
      "CNC",
      "Automation",
    ],

    github: "https://github.com/yourrepo2",

    live: "https://yourdemo2.com",

    featured: false,

    category: "Automation",
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