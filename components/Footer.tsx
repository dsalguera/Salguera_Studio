"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />

      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 md:px-12 lg:px-16 lg:pt-24 xl:px-20">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group relative flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] sm:h-24 sm:w-24 sm:rounded-[1.8rem]"
          >
            <Image
              src="/logo.svg"
              alt="DSM Studio logo"
              width={52}
              height={52}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-14"
            />

            <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Brand */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-violet-300 sm:text-sm">
            DSM Studio
          </p>

          {/* Footer Heading */}
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
            Thanks for visiting.
            <span className="mt-1 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Let&apos;s create something meaningful.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Software engineering, visual design, and digital fabrication brought
            together to turn ideas into complete experiences.
          </p>

          {/* Main CTA */}
          <Link
            href="/contact"
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold !text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto"
          >
            Let&apos;s Talk

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <div className="mt-14 flex flex-col items-center gap-8 border-y border-white/10 py-8 sm:mt-16 sm:flex-row sm:justify-between">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:justify-start"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("http");

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-black"
                >
                  <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center gap-5 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm text-zinc-400">
              © {currentYear} David Salguera. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Designed and developed in Orlando, Florida.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-black">
              <FaArrowUp className="text-xs" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}