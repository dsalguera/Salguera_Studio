"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaCode, FaLocationDot, FaRegCircleCheck } from "react-icons/fa6";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[790px] items-center justify-center overflow-hidden px-5 pb-20 pt-36 text-center sm:px-8 lg:min-h-[850px] lg:pt-40">
      {/* A quiet visual identity, rather than a project preview or a portrait. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[40%] h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(120,67,235,0.21),rgba(45,32,104,0.075)_48%,transparent_74%)] blur-2xl" />
        <div className="absolute left-1/2 top-[41%] h-[530px] w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/10" />
        <div className="absolute left-1/2 top-[41%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.055]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_42%,black,transparent_67%)]" />
        <div className="absolute left-[12%] top-[31%] hidden h-1.5 w-1.5 rounded-full bg-violet-400/70 shadow-[0_0_30px_12px_rgba(139,92,246,0.2)] lg:block" />
        <div className="absolute right-[15%] top-[57%] hidden h-1.5 w-1.5 rounded-full bg-blue-400/70 shadow-[0_0_30px_12px_rgba(59,130,246,0.2)] lg:block" />
      </div>

      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.105 }} className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center">
        <motion.div variants={reveal} className="theme-surface theme-text-secondary inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-xl sm:text-xs">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
          Available for new opportunities
        </motion.div>

        <motion.p variants={reveal} className="accent-text mt-10 text-xs font-semibold uppercase tracking-[0.38em] sm:text-sm">Software Engineer <span className="theme-text-muted mx-2">×</span> Digital Maker</motion.p>
        <motion.h1 variants={reveal} className="theme-text mt-5 text-[clamp(3.4rem,10vw,8.4rem)] font-black leading-[0.98] tracking-[-0.075em]">
          David <span className="accent-gradient-text">Salguera.</span>
        </motion.h1>
        <motion.div variants={reveal} className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
        <motion.h2 variants={reveal} className="theme-text mt-8 max-w-[800px] text-[clamp(1.55rem,3.3vw,3rem)] font-semibold leading-[1.17] tracking-[-0.045em]">
          Thoughtful design. <span className="accent-gradient-text">Powerful code.</span><br className="hidden sm:block" /> Real-world impact.
        </motion.h2>
        <motion.p variants={reveal} className="theme-text-secondary mt-6 max-w-[650px] text-base leading-8 sm:text-lg">
          I design and build digital experiences that feel effortless to use, from polished interfaces to full-stack applications and creative solutions.
        </motion.p>
        <motion.div variants={reveal} className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="#projects" className="theme-primary-button group inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-semibold transition hover:scale-[1.03]">Explore my work <FaArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
          <Link href="/contact" className="theme-secondary-button group inline-flex items-center justify-center gap-3 rounded-full border px-8 py-3.5 text-sm font-semibold transition hover:scale-[1.03]">Let&apos;s talk <FaArrowRight className="accent-text transition-transform group-hover:translate-x-1" /></Link>
        </motion.div>
        <motion.div variants={reveal} className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs sm:text-sm">
          <span className="theme-text-muted inline-flex items-center gap-2"><FaCode className="accent-text" /> Building since 2017</span>
          <span className="theme-text-muted inline-flex items-center gap-2"><FaLocationDot className="accent-text" /> Orlando, FL</span>
          <span className="theme-text-muted inline-flex items-center gap-2"><FaRegCircleCheck className="accent-text" /> Design + development</span>
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to about section" className="theme-text-muted absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-bounce rounded-full border border-[var(--border)] p-3 transition hover:text-[var(--text-primary)]"><FaArrowDown className="text-xs" /></a>
    </section>
  );
}
