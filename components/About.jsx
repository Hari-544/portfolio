export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-8">About Me</h2>

      <p className="text-gray-300 text-lg leading-8">
        I am Hari Krishna, a B.Tech Artificial Intelligence &
        Machine Learning student at Sagi Rama Krishnam Raju
        Engineering College. I enjoy building real-world
        software products using React, Next.js, Firebase,
        Machine Learning, and modern web technologies.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-white/5 rounded-2xl">
          <h3 className="font-bold">College</h3>
          <p>SRKR Engineering College</p>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl">
          <h3 className="font-bold">CGPA</h3>
          <p>8.22</p>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl">
          <h3 className="font-bold">Graduation</h3>
          <p>2028</p>
        </div>
      </div>
    </section>
  );
}