"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">Certifications</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-3 hover:border-cyan-500/40 hover:bg-white/10 transition-colors"
          >
            <BadgeCheck className="text-cyan-400 shrink-0" size={22} />
            <span className="text-gray-200">{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
