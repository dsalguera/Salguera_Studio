"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Animated Grid */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, white 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 20%, transparent 85%)",
        }}
      />

      {/* Purple Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-purple-500/40 blur-[170px]" />
      </motion.div>

      {/* Cyan Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 w-[1600px] h-[1600px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-cyan-500/35 blur-[170px]" />
      </motion.div>

      {/* Indigo Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 w-[1800px] h-[1800px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/25 blur-[180px]" />
      </motion.div>

      {/* Center Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/30 blur-[200px]"
      />

      {/* Ambient Color Shift */}
      <motion.div
        animate={{
          opacity: [0.04, 0.14, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-indigo-500/10"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />
    </div>
  );
}