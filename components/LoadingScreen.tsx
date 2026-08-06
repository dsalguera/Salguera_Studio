"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type LoadingScreenProps = {
  children: ReactNode;
};

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--page-background)]"
          >
            <div className="theme-grid pointer-events-none absolute inset-0 bg-[size:44px_44px] opacity-60 sm:bg-[size:60px_60px]" />
            <div className="theme-glow-primary pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px] sm:h-[560px] sm:w-[560px]" />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="theme-card relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] border sm:h-28 sm:w-28"
              >
                <div className="theme-glow-primary pointer-events-none absolute inset-0 rounded-[inherit] opacity-25 blur-[24px]" />

                <Image
                  src="/logo.svg"
                  alt="DSM Studio logo"
                  width={58}
                  height={58}
                  priority
                  className="navbar-logo relative h-14 w-auto sm:h-16"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
                className="accent-text mt-6 text-xs font-semibold uppercase tracking-[0.34em] sm:text-sm"
              >
                DSM Studio
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="theme-text-muted mt-3 text-sm"
              >
                Preparing the experience
              </motion.p>

              <div className="theme-surface mt-6 h-1 w-36 overflow-hidden rounded-full border">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-500 ${
          loading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}