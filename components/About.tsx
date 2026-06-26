export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12">
      <div>
        <p className="uppercase tracking-[0.2em] text-zinc-500 mb-3">
          About Me
        </p>

        <h2 className="text-4xl font-bold leading-tight">
          Passionate about building useful systems.
        </h2>
      </div>

      <div className="text-zinc-400 leading-relaxed space-y-6">
        <p>
          I've been coding since 2017 and enjoy building scalable applications,
          backend systems, automation workflows, and digital products.
        </p>

        <p>
          My background combines software engineering, creative problem solving,
          and hands-on technical work involving CNC and laser systems.
        </p>
      </div>
    </section>
  );
}