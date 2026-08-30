"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <ThreeScene />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-3">{personalInfo.role}</p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            PATNALA
            <br />
            HARI KRISHNA
          </h1>

          <p className="text-gray-400 mt-6 text-lg">{personalInfo.heroTagline}</p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
            >
              View Projects
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-30 rounded-full"></div>

            <Image
              src="/images/hari-formal.jpg"
              alt="Hari Krishna"
              width={450}
              height={450}
              priority
              className="rounded-3xl relative z-10 border border-white/20 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
