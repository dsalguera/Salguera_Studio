"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_70px_rgba(255,255,255,.08)]"
    >
      {/* Animated Glow */}

      <motion.div
        animate={{ opacity: [.15, .4, .15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/10 via-transparent to-violet-400/10"
      />

      {/* Image */}

      <div className="relative aspect-[16/10] overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: .7 }}
          className="h-full w-full"
        >

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700"
          />

        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Hover CTA */}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">

          <motion.div
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl"
          >
            View Project →
          </motion.div>

        </div>

        {/* Featured */}

        {project.featured && (
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-xl">
            ✨ Featured
          </div>
        )}

        {/* Category */}

        {project.category && (
          <div className="absolute bottom-5 right-5 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-[.2em] backdrop-blur-xl">
            {project.category}
          </div>
        )}

      </div>

      {/* Content */}

      <div className="relative z-10 p-7">

        <h3 className="text-2xl font-bold leading-tight">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((tech, index) => (

            <motion.span
              key={tech}
              animate={{ y: index % 2 === 0 ? [0, -2, 0] : [0, 2, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl"
            >
              {tech}
            </motion.span>

          ))}

        </div>
                {/* Divider */}

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">

          <div className="flex items-center gap-3">

            {project.github && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10"
              >
                <FaGithub />
                GitHub
              </motion.a>
            )}

            {project.live && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                Live Demo

                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.div>

              </motion.a>
            )}

          </div>

          <motion.span
            animate={{ opacity: [.4, 1, .4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xs uppercase tracking-[.25em] text-zinc-500"
          >
            Built with Passion
          </motion.span>

        </div>

      </div>

    </motion.article>
  );
}