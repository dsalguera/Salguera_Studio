"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center sm:px-8 sm:pb-20 sm:pt-28 md:px-12 lg:min-h-screen lg:px-16 lg:pb-24 lg:pt-28 xl:px-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        {/* Availability */}
        <motion.div
          variants={itemVariants}
          className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 backdrop-blur-xl sm:px-4"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300 sm:text-xs sm:tracking-[0.22em]">
            Available for select projects
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm font-medium uppercase tracking-[0.32em] text-zinc-500 sm:mt-10 sm:text-base"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mt-4 whitespace-nowrap text-[2.65rem] font-extrabold leading-none tracking-[-0.04em] text-white min-[390px]:text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem]"
        >
          David Salguera
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-7 h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent sm:mt-8 sm:w-28"
        />

        {/* Positioning */}
        <motion.div
          variants={itemVariants}
          className="mt-7 sm:mt-8 md:mt-9"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-2 text-lg font-medium leading-tight text-zinc-300 sm:text-2xl md:text-3xl">
            <span>Software Engineer</span>
            <span className="text-zinc-600">&</span>
          </p>

          <p className="mt-1.5 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-2xl font-black leading-tight text-transparent sm:text-3xl md:text-4xl">
            Digital Maker
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8"
        >
          I build digital products that combine software, design, and
          fabrication—from modern web applications to visual identities, CNC
          workflows, and creative automation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto"
          >
            Explore Projects

            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/gallery"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-medium text-white backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            View Gallery

            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Location and Status */}
        <motion.div
          variants={itemVariants}
          className="mt-9 flex max-w-2xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-5 text-sm text-zinc-400 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3"
        >
          <span className="flex items-center gap-2">
            <FaLocationDot className="shrink-0 text-zinc-300" />
            Based in Orlando, Florida
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:block" />

          <span>Open to opportunities and collaborations</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-zinc-600 xl:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-zinc-400"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}