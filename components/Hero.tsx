"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden px-5 pb-10 pt-24 text-center sm:px-8 sm:pb-12 sm:pt-28 md:px-12 lg:min-h-[92svh] lg:px-16 lg:pb-14 lg:pt-28 xl:px-20">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.div variants={itemVariants} className="theme-surface inline-flex max-w-full items-center gap-3 rounded-full border px-3.5 py-2 backdrop-blur-xl sm:px-4">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="theme-text-secondary truncate text-[10px] font-medium uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.22em]">Available for select projects</span>
        </motion.div>

        <motion.p variants={itemVariants} className="theme-text-muted mt-7 text-sm font-medium uppercase tracking-[0.32em] sm:mt-9 sm:text-base">Hello, I&apos;m</motion.p>

        <motion.h1 variants={itemVariants} className="theme-text mt-4 max-w-full text-[clamp(2.4rem,10vw,6rem)] font-extrabold leading-none tracking-[-0.04em]">David Salguera</motion.h1>

        <motion.div variants={itemVariants} className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent sm:mt-7 sm:w-28" />

        <motion.div variants={itemVariants} className="mt-6 sm:mt-7">
          <p className="theme-text-secondary flex flex-wrap items-center justify-center gap-x-2 text-lg font-medium leading-tight sm:text-2xl md:text-3xl">
            <span>Software Engineer</span>
            <span className="theme-text-subtle">&</span>
          </p>
          <p className="accent-gradient-text mt-1.5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">Digital Maker</p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="theme-text-secondary mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
          I create digital products that combine software, design, and fabrication—from web applications and visual identities to CNC workflows and creative automation.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <Link href="/projects" className="theme-primary-button group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 font-semibold transition duration-300 sm:w-auto">
            Explore Projects
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/gallery" className="theme-secondary-button group inline-flex w-full items-center justify-center gap-3 rounded-full border px-7 py-3.5 font-medium transition duration-300 hover:scale-[1.02] sm:w-auto">
            View Gallery
            <FaArrowRight className="accent-text text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="theme-text-secondary mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 border-t border-[var(--border)] pt-5 text-sm sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
          <span className="flex items-center gap-2"><FaLocationDot className="accent-text shrink-0" />Based in Orlando, Florida</span>
          <span className="hidden h-1 w-1 rounded-full bg-[var(--text-subtle)] sm:block" />
          <span>Open to opportunities and collaborations</span>
        </motion.div>
      </motion.div>
    </section>
  );
}