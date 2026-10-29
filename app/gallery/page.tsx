"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaXmark } from "react-icons/fa6";

type Category = "All" | "Branding" | "Print" | "Advertising";

type GalleryItem = {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  year: string;
  size: "small" | "medium" | "large" | "wide";
};

const categories: Category[] = ["All", "Branding", "Print", "Advertising"];

const galleryItems: GalleryItem[] = [
  {
    title: "SOLADO · Costa Rica Ice Cream",
    category: "Branding",
    description: "A playful tropical identity brought to life through a realistic branded product mockup.",
    image: "/gallery/solado.webp",
    year: "2026",
    size: "large",
  },
  {
    title: "Tom Summer Adventure",
    category: "Branding",
    description: "Adventure brand identity presented as a real-world vehicle decal.",
    image: "/gallery/tom.webp",
    year: "2026",
    size: "medium",
  },
  {
    title: "Remodeling Bonilla LLC",
    category: "Branding",
    description: "A confident visual identity for a remodeling business, shown in a professional brand mockup.",
    image: "/gallery/bonilla.webp",
    year: "2026",
    size: "medium",
  },
  {
    title: "Mantaraya ATV Adventures",
    category: "Advertising",
    description: "Promotional artwork for an outdoor adventure experience in Costa Rica.",
    image: "/gallery/mantaraya.webp",
    year: "2026",
    size: "medium",
  },
  {
    title: "Hotel Restaurante Buddha",
    category: "Print",
    description: "Hospitality signage and guest-facing information with a distinctive visual identity.",
    image: "/gallery/buddha.webp",
    year: "2026",
    size: "wide",
  },
  {
    title: "Hotel Las Brisas",
    category: "Print",
    description: "Restaurant menu design presented in an authentic hospitality setting.",
    image: "/gallery/lasbrisas.webp",
    year: "2026",
    size: "large",
  },
  {
    title: "Gabriel’s Custom Tours",
    category: "Branding",
    description: "Tourism brand identity designed for a memorable local experience.",
    image: "/gallery/gabrieltours.webp",
    year: "2026",
    size: "medium",
  },
];

const sizeClasses = {
  small: "md:col-span-1 md:row-span-1",
  medium: "md:col-span-1 md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2 md:row-span-1",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="theme-glow-primary pointer-events-none absolute -left-56 top-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[110px] sm:h-[720px] sm:w-[720px]" />
      <div className="theme-glow-secondary pointer-events-none absolute -right-56 top-[48%] h-[500px] w-[500px] rounded-full opacity-20 blur-[110px] sm:h-[720px] sm:w-[720px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
          <Link href="/" className="theme-text-muted group inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--text-primary)]">
            <FaArrowLeft className="accent-text text-xs transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>

          <p className="accent-text mt-10 text-sm font-medium uppercase tracking-[0.3em]">Gallery</p>

          <h1 className="theme-text mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Visual work shaped by
            <span className="accent-gradient-text block">clarity and purpose.</span>
          </h1>

          <p className="theme-text-secondary mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            Selected branding, print, and advertising work—presented through real-world mockups that show how each design comes to life.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }} className="mt-10 flex flex-wrap gap-2 sm:mt-12">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 ${active ? "border-[rgba(var(--accent-rgb),0.38)] bg-[rgba(var(--accent-rgb),0.12)] text-[var(--text-primary)] shadow-[0_10px_30px_rgba(var(--accent-rgb),0.1)]" : "theme-secondary-button"}`}>
                {category}
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[190px] lg:auto-rows-[220px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button key={item.title} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }} type="button" onClick={() => setSelectedItem(item)} className={`theme-card group relative overflow-hidden rounded-[1.5rem] border text-left ${sizeClasses[item.size]}`}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                      {item.category}
                    </span>

                    <span className="text-xs font-medium text-white/70">{item.year}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold leading-tight text-white sm:text-2xl">{item.title}</h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">{item.description}</p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                    View project
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link href="/contact" className="theme-secondary-button group inline-flex items-center gap-3 rounded-full border px-6 py-3.5 font-medium transition hover:scale-[1.02]">
            Have a design project?
            <FaArrowRight className="accent-text text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.button type="button" aria-label="Close gallery preview" onClick={() => setSelectedItem(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-md" />

            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="theme-card fixed inset-x-4 top-1/2 z-[80] mx-auto max-h-[88svh] max-w-5xl -translate-y-1/2 overflow-y-auto rounded-[1.75rem] border sm:inset-x-8">
              <button type="button" onClick={() => setSelectedItem(null)} aria-label="Close preview" className="theme-surface theme-text absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105">
                <FaXmark />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)] bg-[#101015]">
                <Image src={selectedItem.image} alt={selectedItem.title} fill sizes="100vw" className="object-contain bg-[#101015]" />
              </div>

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="theme-surface accent-text rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">{selectedItem.category}</span>
                  <span className="theme-surface theme-text-muted rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">{selectedItem.year}</span>
                </div>

                <h2 className="theme-text mt-5 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{selectedItem.title}</h2>

                <p className="theme-text-secondary mt-4 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">{selectedItem.description}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="theme-primary-button inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-semibold">
                    Start a similar project
                    <FaArrowRight className="text-sm" />
                  </Link>

                  <button type="button" onClick={() => setSelectedItem(null)} className="theme-secondary-button rounded-full border px-6 py-3.5 font-medium">
                    Close preview
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}