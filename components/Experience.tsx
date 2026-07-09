"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
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
    <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
      <ScrollReveal>
        <div className="mb-20">
          <p className="uppercase tracking-[0.25em] text-violet-400 text-sm mb-4">
            CAREER
          </p>

          <h2 className="text-5xl font-black">
            Work Experience
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            A journey through graphic design, software development,
            IT infrastructure, and e-commerce—building solutions that
            combine creativity with technology.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">

        {/* Timeline */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/70 via-white/10 to-indigo-500/60" />

        <div className="space-y-10">

          {experience.map((job, index) => {

            const isOpen = openCard === index;

            return (
              <ScrollReveal key={index}>

                <div className="relative pl-16">

                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-3 flex items-center justify-center w-8 h-8">

                    {/* Breathing Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.15, 0.4, 0.15],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.25,
                      }}
                      className="absolute w-8 h-8 rounded-full bg-violet-500/25 blur-md"
                    />

                    {/* Heartbeat Ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1, 1.15, 1],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, .12, .24, .36, 1],
                        delay: index * .18,
                      }}
                      className="absolute w-5 h-5 rounded-full border border-violet-400/40 bg-violet-500/10 backdrop-blur-md"
                    />

                    {/* Core */}
                    <motion.div
                      animate={{
                        scale: [1, 1.35, 1, 1.35, 1],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, .12, .24, .36, 1],
                        delay: index * .18,
                      }}
                      className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-300 to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,.9)]"
                    />

                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: .25 }}
                    className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-violet-400/30 hover:shadow-[0_0_40px_rgba(139,92,246,.12)]"
                  >

                    {/* Header */}

                    <button
                      onClick={() => setOpenCard(isOpen ? null : index)}
                      className="w-full p-6 flex justify-between items-center text-left"
                    >

                      <div>

                        <h3 className="text-2xl font-bold">
                          {job.role}
                        </h3>

                        <p className="text-zinc-400 mt-2">
                          {job.company}
                        </p>

                        <span className="inline-flex mt-4 items-center rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300 px-3 py-1 text-xs">
                          {job.period}
                        </span>

                      </div>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: .3,
                        }}
                      >
                        <FaChevronDown className="text-zinc-400" />
                      </motion.div>

                    </button>

                    <AnimatePresence initial={false}>

                      {isOpen && (

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: .35 }}
                          className="overflow-hidden"
                        >

                          <div className="px-6 pb-8">

                            <ul className="space-y-4">

                              {job.bullets.map((bullet, i) => (

                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: i * .05,
                                  }}
                                  className="flex gap-4 text-zinc-400 leading-relaxed"
                                >

                                  <motion.div
                                    animate={{
                                      scale: [1, 1.4, 1],
                                      opacity: [.6, 1, .6],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * .15,
                                    }}
                                    className="mt-2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,.9)] flex-shrink-0"
                                  />

                                  <span>{bullet}</span>

                                </motion.li>

                              ))}

                            </ul>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                </div>

              </ScrollReveal>
            );

          })}

        </div>

      </div>

    </section>
  );
}