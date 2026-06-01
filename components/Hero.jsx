"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-lg mb-3">
            AI & ML Engineer
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            PATNALA
            <br />
            HARI KRISHNA
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Passionate AI & ML student building real-world
            web applications, machine learning solutions,
            business systems and interactive products.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold"
            >
              View Projects
            </a>

            <a
              href="mailto:patnalaharikrishna9544@gmail.com"
              className="px-6 py-3 rounded-xl border border-white/20"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
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
              className="rounded-3xl relative z-10 border border-white/20"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}