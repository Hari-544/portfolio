"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">Education</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-cyan-500/40 transition-colors"
      >
        <GraduationCap className="text-cyan-400 mb-4" size={32} />
        <h3 className="text-2xl font-bold text-white">{personalInfo.college}</h3>

        <p className="text-gray-300 mt-2">
          B.Tech - Artificial Intelligence & Machine Learning
        </p>

        <p className="text-gray-300 mt-2">{personalInfo.years}</p>

        <p className="text-cyan-400 font-semibold mt-4">
          CGPA: {personalInfo.cgpa}
        </p>
      </motion.div>
    </section>
  );
}
