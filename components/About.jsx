"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const stats = [
  { label: "College", value: personalInfo.collegeShort, icon: GraduationCap },
  { label: "CGPA", value: personalInfo.cgpa, icon: Award },
  { label: "Graduation", value: personalInfo.graduation, icon: Calendar },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-8" />
        <p className="text-gray-300 text-lg leading-8">{personalInfo.about}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {stats.map(({ label, value, icon: Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-colors"
          >
            <Icon className="text-cyan-400 mb-3" size={24} />
            <h3 className="font-bold text-white">{label}</h3>
            <p className="mt-1 text-gray-300">{value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
