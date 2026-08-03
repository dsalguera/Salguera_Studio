"use client";

import Image from "next/image";
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
      "Full-stack applications, APIs, databases, and scalable digital systems.",
    icon: FaCode,
  },
  {
    title: "Graphic Design",
    description:
      "Brand identities, marketing materials, digital content, and visual communication.",
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
      "Workflows connecting software, hardware, and production processes.",
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
    <section id="about" className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24 xl:px-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-violet-400 sm:text-sm">
            About
          </p>

          <h2 className="text-3xl font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
            Turning ideas
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              into reality.
            </span>
          </h2>

          <div className="mt-7 space-y-4 text-base leading-8 text-zinc-300 sm:text-lg">
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

          {/* DETAILS */}
          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {details.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                <p className="text-lg font-bold text-white sm:text-xl">
                  {detail.value}
                </p>

                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">
                  {detail.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 30, scale: 0.98 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-violet-500/[0.07] blur-[70px]" />

          <motion.div whileHover={{ y: -3, rotateX: 0.75, rotateY: -0.75 }} transition={{ duration: 0.3 }} style={{ transformStyle: "preserve-3d" }} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-violet-500/[0.05]" />

            {/* HEADER */}
            <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:h-14 sm:w-14">
                  <Image src="/logo.svg" alt="DSM Studio logo" width={36} height={36} className="h-8 w-auto sm:h-9" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base sm:tracking-[0.2em]">
                    DSM Studio
                  </p>

                  <p className="mt-1 text-xs text-zinc-300 sm:text-sm">
                    Software, design, and fabrication
                  </p>
                </div>
              </div>

              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            </div>

            {/* CAPABILITIES */}
            <div className="relative mt-5 space-y-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div key={capability.title} className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3.5 transition duration-300 hover:border-white/15 hover:bg-white/[0.07] sm:gap-4 sm:p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-base text-violet-300 transition duration-300 group-hover:text-white sm:h-11 sm:w-11 sm:text-lg">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {capability.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">
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