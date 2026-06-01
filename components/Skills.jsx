const skills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "Firebase",
  "Machine Learning",
  "SQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-5 bg-white/5 rounded-xl border border-white/10"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}