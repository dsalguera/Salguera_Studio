"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    value: "8+",
    label: "Years Coding",
  },
  {
    value: "20+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Industries",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-lg
                rounded-2xl
                p-8
                text-center
                transition-all
              "
            >
              <h3 className="text-4xl md:text-5xl font-black">
                {stat.value}
              </h3>

              <p className="text-zinc-400 mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}