"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare, FaCode, FaLocationDot, FaCircleCheck, FaLayerGroup, FaWandMagicSparkles } from "react-icons/fa6";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[690px] w-full items-center overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-40 md:px-12 lg:min-h-[780px] lg:px-16 xl:px-20">
      {/* Abstract, CSS-only art: the hero is about the person, not a specific project. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-12 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.26),rgba(37,99,235,0.09)_45%,transparent_70%)] blur-2xl sm:right-[-8%]" />
        <div className="absolute -left-52 bottom-0 h-[470px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_70%)] blur-3xl" />
        <div className="absolute right-[11%] top-[24%] hidden h-[390px] w-[390px] rounded-full border border-violet-400/15 lg:block" />
        <div className="absolute right-[8%] top-[19%] hidden h-[480px] w-[480px] rounded-full border border-violet-400/10 lg:block" />
        <div className="absolute right-[14%] top-[29%] hidden h-[310px] w-[310px] rounded-full border border-violet-400/20 lg:block" />
        <div className="absolute right-[19%] top-[35%] hidden h-[210px] w-[210px] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(196,181,253,0.35),rgba(109,40,217,0.16)_42%,rgba(30,27,75,0.02)_73%)] shadow-[0_0_110px_rgba(139,92,246,0.23)] lg:block" />
        <div className="absolute right-[8%] top-[20%] hidden h-[480px] w-[480px] bg-[linear-gradient(rgba(139,92,246,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle,black,transparent_72%)] lg:block" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1350px] items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="relative z-10 max-w-[850px]">
          <motion.div variants={reveal} className="theme-surface theme-text-secondary inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for new opportunities
          </motion.div>
          <motion.p variants={reveal} className="accent-text mt-9 text-sm font-semibold uppercase tracking-[0.3em]">Software Engineer <span className="theme-text-muted mx-2">/</span> Digital Maker</motion.p>
          <motion.h1 variants={reveal} className="theme-text mt-5 text-[clamp(4.5rem,10vw,9rem)] font-black leading-[0.88] tracking-[-0.085em]">David <span className="accent-gradient-text block pb-3">Salguera.</span></motion.h1>
          <motion.h2 variants={reveal} className="theme-text mt-7 max-w-2xl text-[clamp(1.4rem,2.6vw,2.35rem)] font-semibold leading-[1.22] tracking-[-0.035em]">I turn complex ideas into <span className="accent-gradient-text">simple, remarkable digital experiences.</span></motion.h2>
          <motion.p variants={reveal} className="theme-text-secondary mt-5 max-w-xl text-base leading-8 sm:text-lg">From modern web applications to creative automation, I build thoughtful solutions where technology meets design.</motion.p>
          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="theme-primary-button group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition hover:scale-[1.03]">Explore My Work <FaArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/contact" className="theme-secondary-button group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-medium transition hover:scale-[1.03]">Let&apos;s Talk <FaArrowUpRightFromSquare className="accent-text text-xs" /></Link>
          </motion.div>
          <motion.div variants={reveal} className="theme-text-muted mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2"><FaCode className="accent-text" /> Building since 2017</span>
            <span className="inline-flex items-center gap-2"><FaLocationDot className="accent-text" /> Orlando, Florida</span>
            <span className="inline-flex items-center gap-2"><FaCircleCheck className="text-emerald-400" /> Open to opportunities</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative z-10 mx-auto hidden w-full max-w-[370px] lg:block">
          <div className="theme-card relative overflow-hidden rounded-[2rem] border p-7 shadow-[0_30px_100px_rgba(35,14,83,0.24)] backdrop-blur-xl">
            <div className="mb-7 flex items-center justify-between"><span className="accent-text text-[10px] font-semibold uppercase tracking-[0.24em]">The approach</span><FaWandMagicSparkles className="accent-text text-lg" /></div>
            <div className="theme-text text-3xl font-bold leading-tight tracking-tight">Create.<br /><span className="accent-gradient-text">Build.</span><br />Make it matter.</div>
            <div className="mt-7 space-y-4 border-t border-[var(--border)] pt-6">
              <div className="flex items-start gap-3"><span className="theme-surface accent-text rounded-xl border p-2"><FaLayerGroup /></span><div><p className="theme-text text-sm font-semibold">Design with purpose</p><p className="theme-text-muted mt-1 text-xs leading-5">Thoughtful interfaces, built for people.</p></div></div>
              <div className="flex items-start gap-3"><span className="theme-surface accent-text rounded-xl border p-2"><FaCode /></span><div><p className="theme-text text-sm font-semibold">Engineer for impact</p><p className="theme-text-muted mt-1 text-xs leading-5">Clean code and practical solutions.</p></div></div>
            </div>
          </div>
          <div className="theme-surface theme-text-secondary absolute -bottom-6 -left-7 rounded-2xl border px-5 py-3 text-xs shadow-xl backdrop-blur-xl"><span className="accent-text font-semibold">Design × Development</span><span className="mt-1 block">From concept to reality</span></div>
        </motion.div>
      </div>
    </section>
  );
}
