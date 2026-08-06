"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCompassDrafting,
  FaPalette,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const capabilities = [
  {
    title: "Software Engineering",
    description:
      "Modern web applications, APIs, databases, and scalable architectures.",
    icon: FaCode,
  },
  {
    title: "Graphic Design",
    description:
      "Branding, marketing assets, UI design, and visual communication.",
    icon: FaPalette,
  },
  {
    title: "Digital Fabrication",
    description:
      "CNC machining, laser engraving, 3D printing, and production workflows.",
    icon: FaCompassDrafting,
  },
  {
    title: "Creative Automation",
    description:
      "Connecting software, hardware, and production workflows.",
    icon: FaWandMagicSparkles,
  },
];

const details = [
  {
    value: "2017",
    label: "Coding Since",
  },
  {
    value: "Full Stack",
    label: "Primary Focus",
  },
  {
    value: "Orlando, FL",
    label: "Based In",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24 xl:px-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          {/* Label */}
          <p className="accent-text mb-4 text-xs font-medium uppercase tracking-[0.28em] sm:text-sm">
            About
          </p>

          {/* Heading */}
          <h2 className="theme-text text-3xl font-black leading-[1.08] tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Turning ideas

            <span className="accent-gradient-text block">
              into reality.
            </span>
          </h2>

          {/* Description */}
          <div className="theme-text-secondary mt-7 space-y-4 text-base leading-8 sm:text-lg">
            <p>
              I have been coding since 2017, combining software engineering,
              design, and creative problem-solving to transform ideas into
              practical digital products.
            </p>

            <p>
              My experience extends beyond software into branding, e-commerce,
              CNC machining, laser engraving, and digital fabrication. This
              gives me a broader perspective when creating complete solutions.
            </p>
          </div>

          {/* Details */}
          <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="theme-item rounded-2xl border p-4"
              >
                <p className="theme-text text-lg font-bold sm:text-xl">
                  {detail.value}
                </p>

                <p className="theme-text-muted mt-2 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs">
                  {detail.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          {/* Ambient glow */}
          <div className="theme-glow-primary pointer-events-none absolute -inset-8 rounded-full opacity-30 blur-[70px]" />

          {/* Main panel */}
          <motion.div
            whileHover={{
              y: -3,
              rotateX: 0.75,
              rotateY: -0.75,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="theme-card relative overflow-hidden rounded-[1.75rem] border p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-8"
          >
            {/* Decorative reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-70" />

            {/* Panel intro */}
            <div className="relative mb-6 border-b border-[var(--border)] pb-6">
              <p className="accent-text text-xs font-medium uppercase tracking-[0.25em]">
                Core Expertise
              </p>

              <h3 className="theme-text mt-3 text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
                What I bring to every project
              </h3>
            </div>

            {/* Capability list */}
            <div className="relative space-y-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="theme-item group flex items-start gap-3 rounded-2xl border p-3.5 sm:gap-4 sm:p-4"
                  >
                    {/* Icon */}
                    <div className="theme-surface accent-text flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-base transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:text-lg">
                      <Icon />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h4 className="theme-text text-sm font-semibold sm:text-base">
                        {capability.title}
                      </h4>

                      <p className="theme-text-secondary mt-1 text-xs leading-5 sm:text-sm sm:leading-6">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}