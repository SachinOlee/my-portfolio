const projects = [
  { title: "Calculator App", desc: "Built with React.", href: "#" },
  { title: "Quiz App", desc: "Using json-server and Tailwind.", href: "#" },
  // add more
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <a key={p.title} href={p.href} className="border rounded-lg p-5 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
