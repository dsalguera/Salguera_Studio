export default function WhatIBuild() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold mb-12">What I Build</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">SaaS Applications</h3>

          <p className="text-zinc-400">
            Business dashboards, CRUD systems, APIs, authentication,
            and scalable full-stack web applications.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Automation Systems</h3>

          <p className="text-zinc-400">
            CNC workflows, laser systems, engineering-focused automation,
            and fabrication tooling.
          </p>
        </div>
      </div>
    </section>
  );
}