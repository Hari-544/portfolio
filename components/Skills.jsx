import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
