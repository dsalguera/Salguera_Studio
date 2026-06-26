"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-400 mt-2">{project.description}</p>

        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="text-green-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}