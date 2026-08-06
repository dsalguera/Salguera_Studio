"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:your-email@example.com", icon: FaEnvelope },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full overflow-hidden border-t border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--surface),var(--page-background))]" />
      <div className="theme-glow-primary pointer-events-none absolute bottom-[-240px] left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full opacity-20 blur-[110px] sm:h-[680px] sm:w-[680px]" />
      <div className="theme-glow-secondary pointer-events-none absolute -right-48 top-12 h-[380px] w-[380px] rounded-full opacity-15 blur-[100px] sm:h-[560px] sm:w-[560px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 md:px-12 lg:px-16 lg:pt-24 xl:px-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center text-center">
          <Link href="/" aria-label="Go to homepage" className="theme-card group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.6rem] border transition duration-300 hover:-translate-y-1 sm:h-24 sm:w-24 sm:rounded-[1.8rem]">
            <div className="theme-glow-primary pointer-events-none absolute inset-0 rounded-[inherit] opacity-20 blur-[22px]" />
            <Image src="/logo.svg" alt="DSM Studio logo" width={52} height={52} className="navbar-logo relative h-12 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-14" />
          </Link>

          <p className="accent-text mt-7 text-xs font-semibold uppercase tracking-[0.34em] sm:text-sm">DSM Studio</p>

          <h2 className="theme-text mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Thanks for visiting.
            <span className="accent-gradient-text mt-1 block">Let&apos;s create something meaningful.</span>
          </h2>

          <p className="theme-text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Software engineering, visual design, and digital fabrication brought together to turn ideas into complete experiences.
          </p>

          <Link href="/contact" className="theme-primary-button group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 font-semibold transition duration-300 sm:w-auto">
            Let&apos;s Talk
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="theme-text-muted mt-7 flex items-center gap-2 text-sm">
            <FaLocationDot className="accent-text shrink-0" />
            Based in Orlando, Florida
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-8 border-y border-[var(--border)] py-8 sm:mt-16 sm:flex-row sm:justify-between">
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:justify-start">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="theme-text-muted relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[var(--accent-1)] after:transition-all after:duration-300 hover:text-[var(--text-primary)] hover:after:w-full">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("http");

              return (
                <a key={social.label} href={social.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={social.label} title={social.label} className="theme-surface theme-text-secondary group flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[var(--accent-1)]">
                  <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="theme-text-muted text-sm">© {currentYear} David Salguera. All rights reserved.</p>
            <p className="theme-text-subtle mt-1 text-xs">Designed and developed in Orlando, Florida.</p>
          </div>

          <button type="button" onClick={scrollToTop} aria-label="Back to top" className="theme-secondary-button group inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 hover:scale-[1.02]">
            Back to top
            <span className="accent-text flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(var(--accent-rgb),0.1)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-[rgba(var(--accent-rgb),0.18)]">
              <FaArrowUp className="text-xs" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}