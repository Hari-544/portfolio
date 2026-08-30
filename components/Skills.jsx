"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">Skills</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-10" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="p-5 bg-white/5 rounded-xl border border-white/10 text-center hover:border-cyan-500/50 hover:bg-white/10 transition-colors"
          >
            <span className="text-cyan-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
