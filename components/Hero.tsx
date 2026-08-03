"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaCompassDrafting,
  FaLocationDot,
  FaPalette,
} from "react-icons/fa6";

const capabilities = [
  {
    title: "Software Engineering",
    description: "Modern web applications and scalable systems.",
    icon: FaCode,
  },
  {
    title: "Graphic Design",
    description: "Branding, visual communication, and digital content.",
    icon: FaPalette,
  },
  {
    title: "Digital Fabrication",
    description: "CNC, laser engraving, and physical product workflows.",
    icon: FaCompassDrafting,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-8 pb-24 pt-36 md:px-12 lg:pt-32 xl:px-20"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24 xl:grid-cols-[1.35fr_0.65fr]">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl"
        >
          {/* Availability */}
          <motion.div
            variants={itemVariants}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-300">
              Available for select projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-black leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl xl:text-[8rem] 2xl:text-[8.75rem]"
          >
            David
            <span className="block">Salguera.</span>
          </motion.h1>

          {/* Professional Positioning */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-2xl font-medium leading-tight text-zinc-300 sm:text-3xl md:text-4xl">
              Software Engineer
              <span className="mx-3 text-zinc-600">&</span>
            </p>

            <p className="mt-2 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl md:text-5xl">
              Digital Maker.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            I build digital products that combine software, design, and
            fabrication—from modern web applications and visual identities to
            CNC, laser engraving, and creative automation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
            >
              Explore Projects

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-medium text-white backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-white/30 hover:bg-white/10"
            >
              View Gallery

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Location and Status */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex max-w-2xl flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm text-zinc-400"
          >
            <span className="flex items-center gap-2">
              <FaLocationDot className="text-zinc-300" />
              Based in Orlando, Florida
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:block" />

            <span>Open to opportunities and collaborations</span>
          </motion.div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto w-full max-w-lg lg:mx-0 lg:translate-y-8"
        >
          {/* Outer Glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-violet-500/[0.08] blur-[80px]" />

          {/* Main Glass Panel */}
          <motion.div
            whileHover={{ y: -4, rotateX: 1.25, rotateY: -1.25 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9"
          >
            {/* Light Reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-violet-500/[0.05]" />

            {/* Logo */}
            <div className="relative flex items-center justify-between border-b border-white/10 pb-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Image
                    src="/logo.svg"
                    alt="DSM Studio logo"
                    width={36}
                    height={36}
                    priority
                    className="h-9 w-auto"
                  />
                </div>

                <div>
                  <p className="font-semibold tracking-[0.18em] text-white">
                    DSM STUDIO
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Creative technology studio
                  </p>
                </div>
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            </div>

            {/* Capabilities */}
            <div className="relative mt-7 space-y-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.75 + index * 0.14,
                      duration: 0.55,
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition duration-300 hover:border-white/15 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg text-violet-300 transition duration-300 group-hover:text-white">
                      <Icon />
                    </div>

                    <div>
                      <h2 className="font-semibold text-white">
                        {capability.title}
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Approach
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-300">
                  Design. Build. Refine.
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Since
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-300">2017</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Labels */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-600"
          >
            <span>Software</span>
            <span>•</span>
            <span>Design</span>
            <span>•</span>
            <span>Fabrication</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600 md:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
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