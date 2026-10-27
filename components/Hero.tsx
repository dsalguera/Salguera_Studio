"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare, FaCode, FaLocationDot } from "react-icons/fa6";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex w-full items-center overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36 md:px-12 lg:min-h-[670px] lg:px-16 lg:pt-32 xl:px-20">
      <div className="theme-glow-primary pointer-events-none absolute -right-28 top-0 h-[440px] w-[440px] rounded-full opacity-30 blur-[100px]" />
      <div className="relative mx-auto grid w-full max-w-[1340px] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.09 }} className="relative z-10">
          <motion.div variants={reveal} className="theme-surface theme-text-secondary inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Software engineer &amp; digital maker
          </motion.div>
          <motion.h1 variants={reveal} className="theme-text mt-7 text-[clamp(3.3rem,7vw,6.4rem)] font-black leading-[0.98] tracking-[-0.065em]">David <span className="accent-gradient-text">Salguera</span></motion.h1>
          <motion.h2 variants={reveal} className="theme-text mt-7 max-w-[660px] text-2xl font-semibold leading-[1.18] tracking-[-0.035em] sm:text-3xl xl:text-4xl">Building digital experiences <span className="accent-gradient-text">that make an impact.</span></motion.h2>
          <motion.p variants={reveal} className="theme-text-secondary mt-5 max-w-xl text-base leading-8 sm:text-lg">I design and develop modern web applications, combining clean code, thoughtful design, and real-world problem solving.</motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="theme-primary-button group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold">Explore Projects <FaArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/contact" className="theme-secondary-button inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-medium">Let's Talk <FaArrowUpRightFromSquare className="accent-text text-xs" /></Link>
          </motion.div>
          <motion.div variants={reveal} className="theme-text-muted mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm"><span className="inline-flex items-center gap-2"><FaCode className="accent-text" /> Full-stack development</span><span className="inline-flex items-center gap-2"><FaLocationDot className="accent-text" /> Orlando, Florida</span><span>Open to opportunities</span></motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="absolute -inset-7 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.32),rgba(59,130,246,0.10)_45%,transparent_70%)] blur-2xl" />
          <div className="theme-card relative overflow-hidden rounded-[2rem] border p-4 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div><span className="theme-text-muted text-[10px] uppercase tracking-[0.2em]">Selected work / 2026</span></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)]"><Image src="/projects/luckytimes.png" alt="LuckyTimes V3 full-stack application preview" fill priority sizes="(max-width:1024px) 100vw, 520px" className="object-cover" /></div>
            <div className="mt-5 flex items-center justify-between gap-3"><div><p className="theme-text text-lg font-bold">LuckyTimes V3</p><p className="theme-text-muted mt-1 text-xs">Next.js · React · TypeScript · MySQL</p></div><a href="https://luckytimes.salguerastudio.com/" target="_blank" rel="noopener noreferrer" aria-label="Open LuckyTimes live demo" className="theme-primary-button rounded-full p-3"><FaArrowUpRightFromSquare className="text-sm" /></a></div>
          </div>
          <div className="theme-surface theme-text-secondary absolute -bottom-5 -left-3 hidden rounded-2xl border px-5 py-3 text-xs shadow-xl backdrop-blur-xl sm:block"><span className="accent-text font-semibold">Design × Development</span><span className="mt-1 block">From concept to production</span></div>
        </motion.div>
      </div>
    </section>
  );
}
