"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              {project.comingSoon && (
                <span className="shrink-0 px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300">
                  Soon
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.comingSoon ? (
              <span className="inline-block px-6 py-3 rounded-xl bg-white/10 text-gray-300 font-semibold cursor-not-allowed">
                In Development
              </span>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
