"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-8">
        {/* LEFT - Logo */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo.svg"
              alt="DSM Studio"
              width={36}
              height={36}
              priority
              className="h-9 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] transition duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]"
            />

            <span className="text-base font-semibold uppercase tracking-[0.22em]">
              DSM Studio
            </span>
          </Link>
        </div>

        {/* CENTER - Navigation */}
        <div className="flex items-center justify-center gap-12">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <span
                  className={`transition-colors duration-300 ${
                    active ? "text-white" : ""
                  }`}
                >
                  {link.label}
                </span>

                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    active
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT - CTA */}
        <div className="flex justify-end">
          <Link
            href="/contact"
            className="group rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black"
          >
            Let's Talk

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}