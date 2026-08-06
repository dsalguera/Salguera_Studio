"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBars, FaFileArrowDown, FaMoon, FaSun, FaXmark } from "react-icons/fa6";

type ThemeName = "dark" | "light";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("dark");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dsm-theme");
    const initialTheme: ThemeName = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setThemeReady(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme: ThemeName = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("dsm-theme", nextTheme);
  };

  const handleNavigation = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  };

  const themeIcon = themeReady && theme === "dark" ? <FaSun /> : <FaMoon />;

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-menu-shell lg:hidden">
            <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm" />

            <div className="mobile-menu-position">
              <motion.div initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }} className="theme-card mobile-menu-card rounded-[1.5rem] border p-3">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_55%,rgba(var(--accent-rgb),0.05))]" />

                <div className="relative space-y-2">
                  {links.map((link, index) => {
                    const active = pathname === link.href;

                    return (
                      <motion.div key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 + index * 0.05 }}>
                        <Link href={link.href} scroll onClick={handleNavigation} className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-medium transition duration-300 ${active ? "border-[rgba(var(--accent-rgb),0.4)] bg-[rgba(var(--accent-rgb),0.1)] text-[var(--text-primary)]" : "theme-item theme-text-secondary"}`}>
                          <span>{link.label}</span>
                          <span className={`h-2 w-2 shrink-0 rounded-full ${active ? "bg-[var(--accent-1)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.75)]" : "bg-[var(--text-subtle)] opacity-40"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="relative mt-3 space-y-2 border-t border-[var(--border)] pt-3">
                  <a href="/resume/david-salguera-resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="theme-secondary-button group flex w-full items-center justify-center gap-3 rounded-full border px-5 py-3.5 text-sm font-semibold">
                    <FaFileArrowDown className="accent-text text-sm" />
                    View Résumé
                  </a>

                  <Link href="/contact" scroll onClick={handleNavigation} className="theme-primary-button group flex w-full items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-semibold">
                    Let&apos;s Talk
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="theme-text-subtle relative mt-3 pb-[max(0.25rem,env(safe-area-inset-bottom))] text-center text-[9px] uppercase tracking-[0.18em]">
                  Software · Design · Fabrication
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-hidden border-b transition-all duration-500 ${scrolled || menuOpen ? "border-[var(--border)] bg-[color:var(--surface-strong)] shadow-[0_12px_45px_var(--shadow-color)] backdrop-blur-2xl" : "border-transparent bg-transparent"}`}>
        <div className={`mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto] items-center gap-2 px-4 transition-all duration-500 sm:px-8 lg:grid-cols-3 lg:px-16 xl:px-20 ${scrolled ? "h-16" : "h-20"}`}>
          <div className="flex min-w-0 justify-start">
            <Link href="/" scroll onClick={handleNavigation} aria-label="Go to homepage" className="theme-surface group relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border transition duration-300 hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl">
              <Image src="/logo.svg" alt="DSM Studio logo" width={30} height={30} priority className="navbar-logo block h-6 w-auto sm:h-7" />
            </Link>
          </div>

          <div className="hidden items-center justify-center gap-10 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} scroll onClick={handleNavigation} className="group relative py-2 text-sm font-medium tracking-wide">
                  <span className={active ? "theme-text" : "theme-text-muted transition-colors group-hover:text-[var(--text-primary)]"}>{link.label}</span>
                  <span className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[var(--accent-1)] transition-all duration-300 ${active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="theme-surface theme-text-secondary grid h-11 w-11 shrink-0 place-items-center rounded-full border transition hover:-translate-y-0.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ opacity: 0, rotate: -60, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 60, scale: 0.8 }} transition={{ duration: 0.2 }} className="grid h-full w-full place-items-center">
                  {themeIcon}
                </motion.span>
              </AnimatePresence>
            </button>

            <a href="/resume/david-salguera-resume.pdf" target="_blank" rel="noopener noreferrer" className="theme-secondary-button group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition hover:scale-[1.03]">
              <FaFileArrowDown className="accent-text text-xs" />
              Résumé
            </a>

            <Link href="/contact" scroll onClick={handleNavigation} className="theme-secondary-button group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition hover:scale-[1.03]">
              Let&apos;s Talk
              <FaArrowRight className="accent-text text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 lg:hidden">
            <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="theme-surface theme-text-secondary grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ opacity: 0, rotate: -60, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 60, scale: 0.8 }} transition={{ duration: 0.2 }} className="grid h-full w-full place-items-center">
                  {themeIcon}
                </motion.span>
              </AnimatePresence>
            </button>

            <button type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className="theme-surface theme-text grid h-10 w-10 shrink-0 place-items-center rounded-full border text-base">
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }} className="grid h-full w-full place-items-center">
                    <FaXmark />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }} className="grid h-full w-full place-items-center">
                    <FaBars />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
}