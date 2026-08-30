import { personalInfo } from "../data/portfolioData";

export default function About() {
  const stats = [
    { label: "College", value: personalInfo.collegeShort },
    { label: "CGPA", value: personalInfo.cgpa },
    { label: "Graduation", value: personalInfo.graduation },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-8">About Me</h2>

      <p className="text-gray-300 text-lg leading-8">{personalInfo.about}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="font-bold text-cyan-400">{stat.label}</h3>
            <p className="mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
