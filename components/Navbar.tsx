"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";

type ThemeName = "dark" | "light";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const scrollPosition = useRef(0);
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

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    scrollPosition.current = window.scrollY;

    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
    };
  }, [menuOpen]);

  const changeTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("dsm-theme", newTheme);
  };

  const toggleTheme = () => changeTheme(theme === "dark" ? "light" : "dark");

  const mobileMenu = mounted
    ? createPortal(
        <AnimatePresence>
          {menuOpen && (
            <div className="fixed inset-0 z-[999] lg:hidden">
              <motion.button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="theme-card absolute inset-x-3 top-[calc(4.5rem+env(safe-area-inset-top))] mx-auto max-h-[calc(100dvh-5.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] max-w-md overflow-y-auto overscroll-contain rounded-[1.5rem] border p-3 sm:inset-x-8 sm:top-24 sm:max-h-[calc(100dvh-7rem)] sm:rounded-[1.75rem] sm:p-4"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_55%,rgba(var(--accent-rgb),0.05))]" />

                <div className="relative space-y-2">
                  {links.map((link, index) => {
                    const active = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-medium transition duration-300 sm:px-5 sm:py-4 sm:text-base ${
                            active
                              ? "border-[rgba(var(--accent-rgb),0.4)] bg-[rgba(var(--accent-rgb),0.1)] text-[var(--text-primary)]"
                              : "theme-item theme-text-secondary"
                          }`}
                        >
                          <span>{link.label}</span>

                          <span
                            className={`h-2 w-2 rounded-full ${
                              active
                                ? "bg-[var(--accent-1)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.75)]"
                                : "bg-[var(--text-subtle)] opacity-40"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="relative mt-3 border-t border-[var(--border)] pt-3">
                  <Link
                    href="/contact"
                    className="theme-primary-button group flex w-full items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300 sm:px-6 sm:py-4 sm:text-base"
                  >
                    Let&apos;s Talk
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="theme-text-subtle relative mt-3 pb-[env(safe-area-inset-bottom)] text-center text-[9px] uppercase tracking-[0.18em] sm:mt-4 sm:text-[10px] sm:tracking-[0.22em]">
                  Software · Design · Fabrication
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-[var(--border)] bg-[color:var(--surface-strong)] shadow-[0_12px_45px_var(--shadow-color)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1500px] grid-cols-[1fr_auto] items-center px-4 transition-all duration-500 sm:px-8 lg:grid-cols-3 lg:px-16 xl:px-20 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <div className="flex justify-start">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="theme-surface group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border transition duration-300 hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl"
            >
              <div className="theme-glow-primary pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 blur-[18px] transition-opacity duration-300 group-hover:opacity-25" />
              <Image
                src="/logo.svg"
                alt="DSM Studio logo"
                width={30}
                height={30}
                priority
                className="navbar-logo relative h-6 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-7"
              />
            </Link>
          </div>

          <div className="hidden items-center justify-center gap-10 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-2 text-sm font-medium tracking-wide"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "theme-text"
                        : "theme-text-muted group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 rounded-full bg-[var(--accent-1)] transition-all duration-300 ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="theme-surface theme-text-secondary flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 hover:text-[var(--accent-1)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {themeReady && theme === "dark" ? (
                  <motion.span
                    key="desktop-sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaSun />
                  </motion.span>
                ) : (
                  <motion.span
                    key="desktop-moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMoon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/contact"
              className="theme-secondary-button group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition duration-300 hover:scale-[1.03]"
            >
              Let&apos;s Talk
              <FaArrowRight className="accent-text text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="theme-surface theme-text-secondary flex h-10 w-10 items-center justify-center rounded-full border text-sm transition duration-300 sm:h-11 sm:w-11 sm:text-base"
            >
              {themeReady && theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="theme-surface theme-text flex h-10 w-10 items-center justify-center rounded-full border text-base transition duration-300 sm:h-11 sm:w-11 sm:text-lg"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
}