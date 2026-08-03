"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden px-5 pb-10 pt-24 text-center sm:px-8 sm:pb-12 sm:pt-28 md:px-12 lg:min-h-[92svh] lg:px-16 lg:pb-14 lg:pt-28 xl:px-20">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Availability */}
        <motion.div variants={itemVariants} className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 backdrop-blur-xl sm:px-4">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300 sm:text-xs sm:tracking-[0.22em]">
            Available for select projects
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p variants={itemVariants} className="mt-7 text-sm font-medium uppercase tracking-[0.32em] text-zinc-400 sm:mt-9 sm:text-base">
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="mt-4 max-w-full text-[clamp(2.4rem,10vw,6rem)] font-extrabold leading-none tracking-[-0.04em] text-white">
          David Salguera
        </motion.h1>

        {/* Divider */}
        <motion.div variants={itemVariants} className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent sm:mt-7 sm:w-28" />

        {/* Positioning */}
        <motion.div variants={itemVariants} className="mt-6 sm:mt-7">
          <p className="flex flex-wrap items-center justify-center gap-x-2 text-lg font-medium leading-tight text-zinc-200 sm:text-2xl md:text-3xl">
            <span>Software Engineer</span>
            <span className="text-zinc-500">&</span>
          </p>

          <p className="mt-1.5 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-2xl font-black leading-tight text-transparent sm:text-3xl md:text-4xl">
            Digital Maker
          </p>
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
          I create digital products that combine software, design, and fabrication—from web applications and visual identities to CNC workflows and creative automation.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <Link href="/projects" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold !text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto">
            Explore Projects
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link href="/gallery" className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-medium !text-white backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10 sm:w-auto">
            View Gallery
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-5 text-sm text-zinc-300 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
          <span className="flex items-center gap-2">
            <FaLocationDot className="shrink-0 text-zinc-200" />
            Based in Orlando, Florida
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-zinc-500 sm:block" />

          <span>Open to opportunities and collaborations</span>
        </motion.div>
      </motion.div>
    </section>
  );
}