"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Selected work</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Projects I've built</h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
        </div>
        <p className="max-w-xl text-base leading-7 text-gray-400">
          A mix of AI/ML experiments and web projects. Each one has taught me something new about turning an idea into a working interface.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.065] to-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-200">
                {project.category}
              </span>
              <span className="text-sm font-semibold tabular-nums text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white transition group-hover:text-cyan-100">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-white/[0.08] pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <Github size={16} /> Source code <ArrowUpRight size={14} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <ExternalLink size={15} /> Live demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/Hari-544?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-cyan-200"
        >
          Explore all repositories <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
