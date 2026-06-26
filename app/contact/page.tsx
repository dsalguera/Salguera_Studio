"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-5xl font-black mb-10">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <textarea
          placeholder="Message"
          rows={6}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-400">
            Message sent successfully.
          </p>
        )}
      </form>
    </main>
  );
}