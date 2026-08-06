"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheck, FaEnvelope, FaLocationDot, FaPaperPlane } from "react-icons/fa6";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const updateField = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Unable to send message");

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="theme-glow-primary pointer-events-none absolute -left-56 top-28 h-[520px] w-[520px] rounded-full opacity-20 blur-[110px] sm:h-[760px] sm:w-[760px]" />
      <div className="theme-glow-secondary pointer-events-none absolute -bottom-64 -right-56 h-[520px] w-[520px] rounded-full opacity-20 blur-[110px] sm:h-[760px] sm:w-[760px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <Link href="/" className="theme-text-muted group inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--text-primary)]">
            <FaArrowLeft className="accent-text text-xs transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
        </motion.div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:sticky lg:top-28">
            <p className="accent-text text-sm font-medium uppercase tracking-[0.3em]">Contact</p>

            <h1 className="theme-text mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Let&apos;s create something
              <span className="accent-gradient-text block">worth remembering.</span>
            </h1>

            <p className="theme-text-secondary mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
              Whether you need a web application, visual design, e-commerce support, automation, or a creative technical solution, tell me what you are working on.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:your-email@example.com" className="theme-item group flex items-center gap-4 rounded-2xl border p-4">
                <span className="theme-surface accent-text flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"><FaEnvelope /></span>
                <span className="min-w-0">
                  <span className="theme-text-subtle block text-xs uppercase tracking-[0.16em]">Email</span>
                  <span className="theme-text mt-1 block truncate text-sm font-medium sm:text-base">your-email@example.com</span>
                </span>
              </a>

              <div className="theme-item flex items-center gap-4 rounded-2xl border p-4">
                <span className="theme-surface accent-text flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"><FaLocationDot /></span>
                <span>
                  <span className="theme-text-subtle block text-xs uppercase tracking-[0.16em]">Location</span>
                  <span className="theme-text mt-1 block text-sm font-medium sm:text-base">Orlando, Florida</span>
                </span>
              </div>

              <div className="theme-item flex items-center gap-4 rounded-2xl border p-4">
                <span className="theme-surface accent-text flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"><FaCheck /></span>
                <span>
                  <span className="theme-text-subtle block text-xs uppercase tracking-[0.16em]">Availability</span>
                  <span className="theme-text mt-1 block text-sm font-medium sm:text-base">Open to select projects and opportunities</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="theme-card relative overflow-hidden rounded-[2rem] border p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_55%,rgba(var(--accent-rgb),0.05))]" />

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div>
                <p className="accent-text text-xs font-medium uppercase tracking-[0.24em]">Send a message</p>
                <h2 className="theme-text mt-3 text-2xl font-bold sm:text-3xl">Tell me about your idea.</h2>
                <p className="theme-text-secondary mt-3 text-sm leading-6 sm:text-base">Share a few details and I&apos;ll get back to you as soon as possible.</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="theme-text-muted mb-2 block text-sm font-medium">Name</span>
                  <input type="text" required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your name" className="theme-surface theme-text w-full rounded-2xl border px-4 py-3.5 outline-none transition placeholder:text-[var(--text-subtle)] focus:border-[rgba(var(--accent-rgb),0.55)] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.08)]" />
                </label>

                <label className="block">
                  <span className="theme-text-muted mb-2 block text-sm font-medium">Email</span>
                  <input type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className="theme-surface theme-text w-full rounded-2xl border px-4 py-3.5 outline-none transition placeholder:text-[var(--text-subtle)] focus:border-[rgba(var(--accent-rgb),0.55)] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.08)]" />
                </label>
              </div>

              <label className="block">
                <span className="theme-text-muted mb-2 block text-sm font-medium">Subject</span>
                <input type="text" required value={form.subject} onChange={(e) => updateField("subject", e.target.value)} placeholder="What would you like to discuss?" className="theme-surface theme-text w-full rounded-2xl border px-4 py-3.5 outline-none transition placeholder:text-[var(--text-subtle)] focus:border-[rgba(var(--accent-rgb),0.55)] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.08)]" />
              </label>

              <label className="block">
                <span className="theme-text-muted mb-2 block text-sm font-medium">Message</span>
                <textarea required rows={7} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell me about the project, goal, timeline, or challenge..." className="theme-surface theme-text w-full resize-none rounded-2xl border px-4 py-3.5 outline-none transition placeholder:text-[var(--text-subtle)] focus:border-[rgba(var(--accent-rgb),0.55)] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.08)]" />
              </label>

              <button type="submit" disabled={status === "sending"} className="theme-primary-button group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {status === "sending" ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              {status === "success" && <p className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">Your message was sent successfully.</p>}
              {status === "error" && <p className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>}

              <p className="theme-text-subtle flex items-center gap-2 border-t border-[var(--border)] pt-5 text-xs">
                <FaArrowRight className="accent-text shrink-0" />
                I usually respond within one or two business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}