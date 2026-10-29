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
};

const categories: Category[] = ["All", "Branding", "Print", "Advertising"];

const galleryItems: GalleryItem[] = [
  {
    title: "SOLADO · Costa Rica Ice Cream",
    category: "Branding",
    description: "A playful tropical identity brought to life through a realistic branded product mockup.",
    image: "/gallery/solado.webp",
    year: "2026",
  },
  {
    title: "Tom Summer Adventure",
    category: "Branding",
    description: "Adventure brand identity presented as a real-world vehicle decal.",
    image: "/gallery/tom.webp",
    year: "2026",
  },
  {
    title: "Remodeling Bonilla LLC",
    category: "Branding",
    description: "A confident visual identity for a remodeling business, shown in a professional brand mockup.",
    image: "/gallery/bonilla.webp",
    year: "2026",
  },
  {
    title: "Mantaraya ATV Adventures",
    category: "Advertising",
    description: "Promotional artwork for an outdoor adventure experience in Costa Rica.",
    image: "/gallery/mantaraya.webp",
    year: "2026",
  },
  {
    title: "Hotel Restaurante Buddha",
    category: "Print",
    description: "Hospitality signage and guest-facing information with a distinctive visual identity.",
    image: "/gallery/buddha.webp",
    year: "2026",
  },
  {
    title: "Hotel Las Brisas",
    category: "Print",
    description: "Restaurant menu design presented in an authentic hospitality setting.",
    image: "/gallery/lasbrisas.webp",
    year: "2026",
  },
  {
    title: "Gabriel’s Custom Tours",
    category: "Branding",
    description: "Tourism brand identity designed for a memorable local experience.",
    image: "/gallery/gabrieltours.webp",
    year: "2026",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
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

        <div className="mt-8 max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 sm:px-6">
          <p className="accent-text text-xs font-semibold uppercase tracking-[0.16em]">Original design · Digital presentation</p>
          <p className="theme-text-secondary mt-2 text-sm leading-6">
            Every project begins with original graphic design work. The images shown here are digital mockups and rendered presentations created from those designs to illustrate their real-world applications. The presentation may use AI-assisted tools; the underlying artwork is not AI-generated.
          </p>
        </div>

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

        <motion.div layout className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button key={item.title} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }} type="button" onClick={() => setSelectedItem(item)} className="theme-card group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border text-left sm:min-h-0">
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#101015]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                      {item.category}
                    </span>

                    <span className="theme-text-muted text-xs font-medium">{item.year}</span>
                  </div>

                  <h2 className="mt-4 theme-text text-xl font-bold leading-tight sm:text-2xl">{item.title}</h2>

                  <p className="mt-2 line-clamp-2 theme-text-secondary text-sm leading-6">{item.description}</p>

                  <span className="theme-text mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium">
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
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedItem(null);
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-label={`Preview: ${selectedItem.title}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="theme-card relative flex h-[min(90dvh,900px)] min-h-0 w-full max-w-6xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close preview"
                className="theme-surface theme-text absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg transition hover:scale-105"
              >
                <FaXmark />
              </button>

              <div className="relative min-h-0 flex-1 bg-[#101015]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[var(--border)] px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <p className="accent-text text-[10px] font-semibold uppercase tracking-[0.16em]">{selectedItem.category} · {selectedItem.year}</p>
                  <h2 className="theme-text mt-1 truncate text-base font-bold sm:text-xl">{selectedItem.title}</h2>
                  <p className="theme-text-muted mt-1 text-xs">Original artwork · Digitally rendered mockup</p>
                </div>
                <button type="button" onClick={() => setSelectedItem(null)} className="theme-secondary-button shrink-0 rounded-full border px-4 py-2 text-sm font-medium">
                  Close
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}