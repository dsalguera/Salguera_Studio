"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  children: React.ReactNode;
};

export default function LoadingScreen({
  children,
}: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("dsm-loader");

    if (hasVisited) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem("dsm-loader", "true");

    document.body.style.overflow = "hidden";

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 500);

          return 100;
        }

        const increment =
          prev < 25
            ? 5
            : prev < 60
            ? 3
            : prev < 85
            ? 2
            : 1;

        return Math.min(prev + increment, 100);
      });
    }, 35);

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>

        {loading && (

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

            {/* Content */}

            <div className="relative z-10 flex w-full max-w-md flex-col items-center px-8">

              {/* Logo */}

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10"
              >
                <img
                  src="/logo.svg"
                  alt="DSM Studio"
                  className="h-24 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]"
                />
              </motion.div>

              {/* Studio Name */}

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-3xl font-bold tracking-[0.35em]"
              >
                DSM STUDIO
              </motion.h1>

              {/* Subtitle */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-4 text-sm uppercase tracking-[0.25em] text-zinc-400"
              >
                Full Stack Developer
              </motion.p>

              {/* Signature Line */}

              <div className="relative mt-16 h-px w-72 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                  className="absolute left-0 top-0 h-full bg-white"
                />

                <motion.div
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
                  className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                />

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>

    </>
  );
}