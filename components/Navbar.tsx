"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || menuOpen ? "border-b border-white/10 bg-black/70 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl" : "bg-transparent"}`}>
        <div className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-5 transition-all duration-500 sm:px-8 lg:grid-cols-3 lg:px-10 ${scrolled ? "h-16" : "h-20"}`}>
          {/* LOGO */}
          <div className="flex justify-start">
            <Link href="/" aria-label="Go to homepage" className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]">
              <Image src="/logo.svg" alt="DSM Studio logo" width={30} height={30} priority className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />

              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center justify-center gap-10 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} className="group relative py-2 text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white">
                  <span className={active ? "text-white" : ""}>
                    {link.label}
                  </span>

                  <span className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden justify-end lg:flex">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white hover:text-black">
              Let&apos;s Talk

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex justify-end lg:hidden">
            <button type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10">
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ opacity: 0, rotate: -90, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    <FaXmark />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ opacity: 0, rotate: 90, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: -90, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    <FaBars />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" />

            <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-4 top-24 z-40 overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/95 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:inset-x-8 lg:hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-violet-500/[0.04]" />

              <div className="relative space-y-2">
                {links.map((link, index) => {
                  const active = pathname === link.href;

                  return (
                    <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + index * 0.06 }}>
                      <Link href={link.href} className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-medium transition-all duration-300 ${active ? "border-white/15 bg-white/10 text-white" : "border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"}`}>
                        <span>{link.label}</span>

                        <span className={`h-2 w-2 rounded-full transition-all duration-300 ${active ? "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" : "bg-zinc-700 group-hover:bg-zinc-400"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative mt-4 border-t border-white/10 pt-4">
                <Link href="/contact" className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-black transition duration-300 hover:bg-zinc-200">
                  Let&apos;s Talk

                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <p className="relative mt-5 text-center text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Software · Design · Fabrication
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}