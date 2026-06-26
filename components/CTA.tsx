export default function CTA() {
  return (

    <section className="max-w-6xl mx-auto px-6 py-32 text-center">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
        <p className="uppercase tracking-[0.2em] text-zinc-500 mb-4">
          Let’s Build Together
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Ready to create something modern and impactful?
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Whether it’s a full-stack platform, automation workflow,
          or digital product, I enjoy building systems that solve
          real-world problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:text-black transition">
            Contact Me</a>

  
          <a
            href="/projects"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}