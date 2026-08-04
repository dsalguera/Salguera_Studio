"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarDays,
  FaLocationDot,
} from "react-icons/fa6";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Graphic Designer & Ecommerce Specialist",
    company: "Printaway Orlando",
    period: "Apr 2025 — Present",
    location: "Orlando, Florida",
    summary:
      "Managing visual content, product listings, and digital storefront operations across multiple e-commerce platforms.",
    highlights: [
      "Create product imagery, banners, advertisements, and promotional assets.",
      "Manage products, pricing, inventory, and digital storefront content.",
      "Support SEO, email campaigns, product launches, and sales optimization.",
    ],
    skills: [
      "Graphic Design",
      "E-commerce",
      "SEO",
      "Product Management",
    ],
  },
  {
    role: "Graphic Designer & Office Coordinator",
    company: "AdventHealth Central Florida",
    period: "May 2024 — Feb 2025",
    location: "Central Florida",
    summary:
      "Coordinated print production, customer communication, design quality, and operational workflows.",
    highlights: [
      "Managed printing orders from request through final delivery.",
      "Reviewed artwork and production files before printing.",
      "Coordinated customers, vendors, inventory, and production teams.",
    ],
    skills: [
      "Print Production",
      "Customer Support",
      "Quality Control",
      "Coordination",
    ],
  },
  {
    role: "Computer & Server Technician",
    company: "MKB Technology",
    period: "Feb 2024 — May 2024",
    location: "Orlando, Florida",
    summary:
      "Built, tested, configured, and documented computer and server systems for production use.",
    highlights: [
      "Installed server hardware, CPUs, RAM, RAID controllers, and power supplies.",
      "Deployed and tested Windows Server and Linux environments.",
      "Configured networking, VLANs, security policies, and benchmarks.",
    ],
    skills: [
      "Server Hardware",
      "Linux",
      "Networking",
      "Troubleshooting",
    ],
  },
  {
    role: "Graphic Designer & Web Developer",
    company: "Pixels Santa Cruz",
    period: "2017 — 2022",
    location: "Nicaragua",
    summary:
      "Designed visual identities and developed responsive websites for businesses and digital projects.",
    highlights: [
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Created branding, marketing materials, and digital content.",
      "Implemented CMS and e-commerce solutions for business clients.",
    ],
    skills: [
      "Web Development",
      "Branding",
      "UI Design",
      "E-commerce",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "IBEX Global",
    period: "May 2019 — Mar 2020",
    location: "Nicaragua",
    summary:
      "Supported customers across phone, email, and chat while resolving account and billing concerns.",
    highlights: [
      "Resolved billing, account, and service-related issues.",
      "Maintained customer satisfaction and performance standards.",
      "Documented interactions, solutions, and follow-up actions.",
    ],
    skills: [
      "Customer Support",
      "Communication",
      "Problem Solving",
      "Documentation",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experience[activeIndex];

  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Experience
          </p>

          <h2 className="text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
            Work shaped by
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              technology and design.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            A multidisciplinary background spanning software, design,
            e-commerce, technical systems, and customer experience.
          </p>
        </motion.div>

        {/* Mobile role selector */}
        <div className="mt-10 grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 lg:hidden">
          {experience.map((job, index) => {
            const active = activeIndex === index;

            return (
              <button
                key={`${job.company}-${job.period}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={active}
                className={`group relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                  active
                    ? "border-violet-400/40 bg-violet-400/[0.09] shadow-[0_10px_35px_rgba(139,92,246,0.08)]"
                    : "border-white/[0.08] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.75)]"
                        : "bg-zinc-700 group-hover:bg-zinc-500"
                    }`}
                  />

                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        active ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {job.company}
                    </p>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-400">
                      {job.role}
                    </p>

                    <span className="mt-2 inline-flex whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                      {job.period}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Experience interface */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            delay: 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:mt-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Desktop role navigation */}
          <div className="hidden border-r border-white/10 bg-white/[0.025] p-4 lg:block">
            <div className="space-y-2">
              {experience.map((job, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={`${job.company}-${job.period}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={active}
                    className={`group relative w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                      active
                        ? "border-white/15 bg-white/[0.09]"
                        : "border-transparent bg-transparent hover:border-white/[0.07] hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                          active
                            ? "bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.75)]"
                            : "bg-zinc-700 group-hover:bg-zinc-500"
                        }`}
                      />

                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm font-semibold transition-colors duration-300 ${
                            active ? "text-white" : "text-zinc-300"
                          }`}
                        >
                          {job.company}
                        </p>

                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-400">
                          {job.role}
                        </p>

                        <span className="mt-2 inline-flex whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
                    {/* Active role */}
          <div className="relative p-5 sm:p-7 lg:min-h-[500px] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-violet-500/[0.035]" />

            <motion.div
              key={`${activeExperience.company}-${activeExperience.role}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Header */}
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-violet-300">
                    <FaBriefcase />
                  </div>

                  <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {activeExperience.role}
                  </h3>

                  <p className="mt-2 text-base font-medium text-violet-300">
                    {activeExperience.company}
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-zinc-400 sm:items-end">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <FaCalendarDays className="shrink-0 text-zinc-300" />
                    {activeExperience.period}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaLocationDot className="shrink-0 text-zinc-300" />
                    {activeExperience.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                {activeExperience.summary}
              </p>

              {/* Highlights */}
              <div className="mt-7 space-y-3">
                {activeExperience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"
                  >
                    <FaArrowRight className="mt-1 shrink-0 text-sm text-violet-300" />

                    <p className="text-sm leading-6 text-zinc-300 sm:text-base">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
          