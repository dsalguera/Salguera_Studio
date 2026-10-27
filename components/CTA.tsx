"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background glows */}
      <div className="theme-glow-primary pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px] sm:h-[700px] sm:w-[700px]" />

      <div className="theme-glow-secondary pointer-events-none absolute -bottom-56 -right-48 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px] sm:h-[620px] sm:w-[620px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="theme-card relative overflow-hidden rounded-[2rem] border px-5 py-12 text-center sm:px-10 sm:py-16 md:px-14 lg:py-20"
        >
          {/* Decorative reflection */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_50%,rgba(var(--accent-rgb),0.055))]" />

          {/* Inner glow */}
          <div className="theme-glow-primary pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[85px] sm:h-[500px] sm:w-[500px]" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center">
            {/* Label */}
            <p className="accent-text text-xs font-medium uppercase tracking-[0.28em] sm:text-sm">
              Let&apos;s Work Together
            </p>

            {/* Heading */}
            <h2 className="theme-text mt-5 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              Have an idea worth
              <span className="accent-gradient-text block">
                bringing to life?
              </span>
            </h2>

            {/* Description */}
            <p className="theme-text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              I&apos;m open to software projects, creative collaborations,
              e-commerce work, design challenges, and opportunities that connect
              technology with real-world products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="theme-primary-button group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 font-semibold transition duration-300 sm:w-auto"
              >
                Start a Conversation

                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            {/* Details */}
            <div className="theme-text-muted mt-9 flex flex-col items-center justify-center gap-3 border-t border-[var(--border)] pt-6 text-sm sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <span className="flex items-center gap-2">
                <FaLocationDot className="accent-text shrink-0" />
                Orlando, Florida
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[var(--text-subtle)] sm:block" />

              <span>Available for select projects and opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}