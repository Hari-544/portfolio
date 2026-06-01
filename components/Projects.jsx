"use client";

import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}