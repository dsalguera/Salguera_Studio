"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const experience = [
  {
    role: "Graphic Designer & Ecommerce Specialist",
    company: "Printaway Orlando",
    period: "Apr 2025 - Present",
    bullets: [
      "Designed and created engaging visual content for e-commerce platforms, including product images, banners, and marketing materials.",
      "Oversaw management of Amazon, Etsy, eBay, and other e-commerce platforms.",
      "Collaborated on email campaigns, social media content, and digital advertisements.",
      "Performed website updates, product uploads, pricing adjustments, and SEO optimization.",
      "Analyzed traffic and sales data to improve customer experience and increase sales.",
      "Managed inventory and maintained consistency across online channels.",
      "Supported promotional campaigns and product launches.",
      "Maintained organized workflows to meet project deadlines.",
    ],
  },

  {
    role: "Graphic Designer & Office Coordinator",
    company: "AdventHealth Central Florida",
    period: "May 2024 - Feb 2025",
    bullets: [
      "Managed and tracked printing orders from initial request to final delivery.",
      "Reviewed design quality before production.",
      "Provided customer support via phone and email.",
      "Coordinated vendors and production teams.",
      "Maintained client records and inventory.",
      "Created marketing materials and promotional graphics.",
    ],
  },

  {
    role: "Computer & Server Technician",
    company: "MKB Technology",
    period: "Feb 2024 - May 2024",
    bullets: [
      "Installed and tested server hardware including CPUs, RAM, RAID controllers, and power supplies.",
      "Deployed Windows Server and Linux systems.",
      "Performed stress testing and benchmarking.",
      "Configured networking, VLANs, and security policies.",
      "Documented troubleshooting procedures and test results.",
    ],
  },

  {
    role: "Graphic Designer & Web Developer",
    company: "Pixels Santa Cruz",
    period: "2017 - 2022",
    bullets: [
      "Developed responsive websites using HTML, CSS, JavaScript, and related technologies.",
      "Collaborated with teams to translate business requirements into web solutions.",
      "Conducted testing and debugging.",
      "Implemented CMS and e-commerce solutions.",
      "Stayed current with web development trends and best practices.",
      "Participated in code reviews and quality improvements.",
    ],
  },

  {
    role: "Customer Service Representative",
    company: "IBEX Global",
    period: "May 2019 - Mar 2020",
    bullets: [
      "Provided customer support through phone, email, and chat.",
      "Resolved billing and account issues.",
      "Maintained customer satisfaction metrics.",
      "Documented interactions and follow-up actions.",
    ],
  },
];

export default function Experience() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-20">
          Work Experience
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />

        <div className="space-y-10">
          {experience.map((job, index) => {
            const isOpen = openCard === index;

            return (
              <ScrollReveal key={index}>
                <div className="relative pl-16">
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-0
                      top-3
                      h-8
                      w-8
                      rounded-full
                      bg-white
                      shadow-[0_0_20px_rgba(255,255,255,0.5)]
                    "
                  />

                  <div
                    className="
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      backdrop-blur-lg
                      overflow-hidden
                    "
                  >
                    {/* Header */}
                    <button
                      onClick={() =>
                        setOpenCard(
                          isOpen ? null : index
                        )
                      }
                      className="
                        w-full
                        p-6
                        flex
                        justify-between
                        items-center
                        text-left
                      "
                    >
                      <div>
                        <h3 className="text-xl font-bold">
                          {job.role}
                        </h3>

                        <p className="text-zinc-400 mt-1">
                          {job.company}
                        </p>

                        <span
                          className="
                            inline-block
                            mt-3
                            text-xs
                            bg-white/10
                            px-3
                            py-1
                            rounded-full
                          "
                        >
                          {job.period}
                        </span>
                      </div>

                      <div className="text-zinc-400">
                        {isOpen ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`
                        transition-all
                        duration-500
                        overflow-hidden
                        ${
                          isOpen
                            ? "max-h-[1000px]"
                            : "max-h-0"
                        }
                      `}
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-3 text-zinc-400">
                          {job.bullets.map(
                            (bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex gap-3"
                              >
                                <span className="text-white">
                                  •
                                </span>

                                <span>{bullet}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}