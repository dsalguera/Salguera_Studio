"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Purple Orbiter */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-[1400px]
          h-[1400px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-500/40
            blur-[140px]
          "
        />
      </motion.div>

      {/* Cyan Orbiter */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-[1600px]
          h-[1600px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[550px]
            h-[550px]
            rounded-full
            bg-cyan-500/35
            blur-[140px]
          "
        />
      </motion.div>

      {/* Blue Center Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-500/30
          blur-[180px]
        "
      />

      {/* Ambient Pulse */}
      <motion.div
        animate={{
          opacity: [0.05, 0.18, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-purple-500/10
          via-cyan-500/5
          to-blue-500/10
        "
      />
    </div>
  );
}