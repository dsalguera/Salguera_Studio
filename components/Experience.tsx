"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

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
    summary: "Managing visual content, product listings, and digital storefront operations across multiple e-commerce platforms.",
    highlights: [
      "Create product imagery, banners, advertisements, and promotional assets.",
      "Manage products, pricing, inventory, and digital storefront content.",
      "Support SEO, email campaigns, product launches, and sales optimization.",
    ],
    skills: ["Graphic Design", "E-commerce", "SEO", "Product Management"],
  },
  {
    role: "Graphic Designer & Office Coordinator",
    company: "AdventHealth Central Florida",
    period: "May 2024 — Feb 2025",
    location: "Central Florida",
    summary: "Coordinated print production, customer communication, design quality, and operational workflows.",
    highlights: [
      "Managed printing orders from request through final delivery.",
      "Reviewed artwork and production files before printing.",
      "Coordinated customers, vendors, inventory, and production teams.",
    ],
    skills: ["Print Production", "Customer Support", "Quality Control", "Coordination"],
  },
  {
    role: "Computer & Server Technician",
    company: "MKB Technology",
    period: "Feb 2024 — May 2024",
    location: "Orlando, Florida",
    summary: "Built, tested, configured, and documented computer and server systems for production use.",
    highlights: [
      "Installed server hardware, CPUs, RAM, RAID controllers, and power supplies.",
      "Deployed and tested Windows Server and Linux environments.",
      "Configured networking, VLANs, security policies, and benchmarks.",
    ],
    skills: ["Server Hardware", "Linux", "Networking", "Troubleshooting"],
  },
  {
    role: "Graphic Designer & Web Developer",
    company: "Pixels Santa Cruz",
    period: "2017 — 2022",
    location: "Nicaragua",
    summary: "Designed visual identities and developed responsive websites for businesses and digital projects.",
    highlights: [
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Created branding, marketing materials, and digital content.",
      "Implemented CMS and e-commerce solutions for business clients.",
    ],
    skills: ["Web Development", "Branding", "UI Design", "E-commerce"],
  },
  {
    role: "Customer Service Representative",
    company: "IBEX Global",
    period: "May 2019 — Mar 2020",
    location: "Nicaragua",
    summary: "Supported customers across phone, email, and chat while resolving account and billing concerns.",
    highlights: [
      "Resolved billing, account, and service-related issues.",
      "Maintained customer satisfaction and performance standards.",
      "Documented interactions, solutions, and follow-up actions.",
    ],
    skills: ["Customer Support", "Communication", "Problem Solving", "Documentation"],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experience[activeIndex];

  return (
    <section id="experience" className="relative w-full py-12 sm:py-14 lg:py-16">
      <div className="theme-glow-secondary pointer-events-none absolute -right-48 top-1/3 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px] sm:h-[620px] sm:w-[620px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
          className="max-w-3xl"
        >
          <p className="accent-text mb-4 text-sm font-medium uppercase tracking-[0.3em]">
            Experience
          </p>

          <h2 className="theme-text text-3xl font-black tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Work shaped by
            <span className="accent-gradient-text block">
              technology and design.
            </span>
          </h2>

          <p className="theme-text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            A multidisciplinary background spanning software, design, e-commerce, technical systems, and customer experience.
          </p>
        </motion.div>

        {/* MOBILE EXPERIENCE SELECTOR */}
        <div className="mt-9 flex flex-col gap-4 min-[520px]:grid min-[520px]:grid-cols-2 lg:hidden">
          {experience.map((job, index) => {
            const active = activeIndex === index;

            return (
              <button
                key={`${job.company}-${job.period}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                  active
                    ? "border-[rgba(var(--accent-rgb),0.4)] bg-[rgba(var(--accent-rgb),0.1)] shadow-[0_10px_30px_rgba(var(--accent-rgb),0.09)]"
                    : "theme-item"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      active
                        ? "bg-[var(--accent-1)] shadow-[0_0_14px_rgba(var(--accent-rgb),0.75)]"
                        : "bg-[var(--text-subtle)] opacity-50"
                    }`}
                  />

                  <div className="min-w-0">
                    <p className="theme-text text-sm font-semibold">
                      {job.company}
                    </p>

                    <p className="theme-text-muted mt-1 line-clamp-1 text-xs leading-5">
                      {job.role}
                    </p>

                    <span className="theme-surface theme-text-muted mt-2.5 inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em]">
                      {job.period}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN EXPERIENCE INTERFACE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22,1,0.36,1] }}
          className="theme-card mt-8 grid overflow-hidden rounded-[1.75rem] border lg:mt-10 lg:grid-cols-[0.82fr_1.18fr]"
        >
          {/* DESKTOP EXPERIENCE SELECTOR */}
          <div className="hidden border-r border-[var(--border)] bg-[var(--surface)] p-5 lg:block xl:p-6">
            <div className="flex flex-col gap-5">
              {experience.map((job, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={`${job.company}-${job.period}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      active
                        ? "border-[rgba(var(--accent-rgb),0.42)] bg-[rgba(var(--accent-rgb),0.11)] shadow-[0_10px_30px_rgba(var(--accent-rgb),0.08)]"
                        : "theme-item"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                          active
                            ? "bg-[var(--accent-1)] shadow-[0_0_14px_rgba(var(--accent-rgb),0.75)]"
                            : "bg-[var(--text-subtle)] opacity-45 group-hover:opacity-70"
                        }`}
                      />

                      <div className="min-w-0">
                        <p className="theme-text truncate text-sm font-semibold">
                          {job.company}
                        </p>

                        <p className="theme-text-muted mt-1 line-clamp-1 text-xs leading-5">
                          {job.role}
                        </p>

                        <span className="theme-surface theme-text-muted mt-2.5 inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em]">
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE EXPERIENCE */}
          <div className="relative p-5 sm:p-7 lg:min-h-[420px] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_55%,rgba(var(--accent-rgb),0.04))]" />

            <motion.div
              key={`${activeExperience.company}-${activeExperience.role}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
              className="relative"
            >
              {/* CLEAN HEADER */}
              <div className="flex flex-col gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 sm:pr-8">
                  <h3 className="theme-text max-w-2xl text-2xl font-bold leading-[1.15] tracking-[-0.025em] sm:text-3xl">
                    {activeExperience.role}
                  </h3>

                  <p className="accent-text mt-2.5 text-base font-medium">
                    {activeExperience.company}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:items-end sm:text-right">
                  <p className="theme-text whitespace-nowrap text-sm font-medium">
                    {activeExperience.period}
                  </p>

                  <p className="theme-text-muted text-sm">
                    {activeExperience.location}
                  </p>
                </div>
              </div>

              {/* SUMMARY */}
              <p className="theme-text-secondary mt-7 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
                {activeExperience.summary}
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-8 flex flex-col gap-4">
                {activeExperience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="theme-item flex items-start gap-4 rounded-2xl border px-5 py-4"
                  >
                    <FaArrowRight className="accent-text mt-1 shrink-0 text-sm" />

                    <p className="theme-text-secondary text-sm leading-6 sm:text-base">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* SKILLS */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {activeExperience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="theme-surface theme-text-secondary rounded-full border px-4 py-2 text-xs font-medium"
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