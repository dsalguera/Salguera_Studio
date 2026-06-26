const projects = [
  {
    title: "Laravel + React CRUD",
    description:
      "Full-stack management platform with APIs and authentication.",
  },
  {
    title: "CNC Automation Workflow",
    description:
      "Engineering-focused automation and fabrication workflows.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold">Featured Projects</h2>

        <a href="/projects" className="text-zinc-400 hover:text-white">
          View All →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:translate-y-[-5px] transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}