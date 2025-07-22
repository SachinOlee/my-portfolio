const skills = ["React", "Node.js", "JavaScript", "Tailwind CSS", "Python", "SQL"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
