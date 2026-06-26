"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="uppercase tracking-[0.3em] text-zinc-400 mb-4"
      >
        Full Stack Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-black leading-tight max-w-5xl"
      >
        Building Modern Web Apps & Automation Systems
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-zinc-400 text-xl max-w-2xl mt-8 leading-relaxed"
      >
        I build scalable digital experiences using Next.js, Laravel,
        TypeScript, APIs, and engineering-focused workflows.
      </motion.p>

      <div className="flex gap-4 mt-10 flex-wrap justify-center">
        <a
          href="/projects"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}