const certifications = [
  "Google Android Developer",
  "AI-ML Virtual Internship",
  "AI for Beginners - HP LIFE",
  "IT for Business Success - HP LIFE",
  "Inventory Management - HP LIFE",
  "AI for All - Intel"
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}