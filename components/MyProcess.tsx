"use client";

import { motion } from "framer-motion";
import {
  FaCompass,
  FaPenRuler,
  FaCode,
  FaWandMagicSparkles,
  FaArrowRight,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding the problem, goals, and the people behind every experience.",
    icon: FaCompass,
  },
  {
    number: "02",
    title: "Design",
    description: "Shaping intuitive interfaces and thoughtful, purposeful interactions.",
    icon: FaPenRuler,
  },
  {
    number: "03",
    title: "Develop",
    description: "Turning concepts into dependable, maintainable, scalable applications.",
    icon: FaCode,
  },
  {
    number: "04",
    title: "Refine",
    description: "Testing, optimizing, and polishing the details that make a difference.",
    icon: FaWandMagicSparkles,
  },
];

export default function MyProcess() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="theme-glow-secondary pointer-events-none absolute -right-52 top-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[110px]" />
      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="accent-text text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">My Process</p>
          <h2 id="process-heading" className="theme-text mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl md:text-5xl">
            From idea to reality.
            <span className="accent-gradient-text block">Every detail matters.</span>
          </h2>
          <p className="theme-text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Great digital experiences don&apos;t happen by accident. They&apos;re built through thoughtful planning, clean code, and continuous improvement.
          </p>
        </motion.div>

        <div className="relative mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[3.6rem] hidden h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent xl:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="theme-card group relative flex min-h-[245px] flex-col overflow-hidden rounded-[1.6rem] border p-6 sm:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-[48px] transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="accent-gradient-text text-4xl font-black tracking-[-0.06em]">{step.number}</span>
                  <span className="theme-surface accent-text flex h-11 w-11 items-center justify-center rounded-2xl border text-lg">
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <div className="relative mt-auto pt-10">
                  <h3 className="theme-text text-xl font-bold">{step.title}</h3>
                  <p className="theme-text-secondary mt-3 text-sm leading-6">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <FaArrowRight aria-hidden="true" className="accent-text absolute bottom-6 right-5 hidden text-xs opacity-35 xl:block" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
