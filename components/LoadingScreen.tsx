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
    document.body.style.overflow = "hidden";

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 350);

          return 100;
        }

        return prev + 2;
      });
    }, 18);

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

              <motion.div
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .7 }}
                className="text-7xl font-black tracking-tight"
              >
                DS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .15 }}
                className="mt-8 text-lg font-semibold tracking-[0.45em]"
              >
                SALGUERA STUDIO
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: .7 }}
                transition={{ delay: .35 }}
                className="mt-4 text-sm text-zinc-400"
              >
                Building Digital Experiences
              </motion.p>

              {/* Progress */}

              <div className="mt-14 w-full overflow-hidden rounded-full bg-white/10">

                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="relative h-[4px] rounded-full bg-white"
                >

                  <motion.div
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
                  />

                </motion.div>

              </div>

              <motion.span
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: .6 }}
                className="mt-5 text-xs tracking-[0.25em] text-zinc-500"
              >
                {progress}%
              </motion.span>
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