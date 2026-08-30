"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import ThreeScene from "./ThreeScene";

const ROLES = [
  "AI & ML Engineer",
  "Full Stack Developer",
  "Web Developer",
];

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) {
  const [state, setState] = useState({
    index: 0,
    subIndex: 0,
    deleting: false,
  });

  useEffect(() => {
    const { index, subIndex, deleting } = state;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const timer = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && subIndex === 0) {
      const timer = setTimeout(
        () =>
          setState((s) => ({
            ...s,
            deleting: false,
            index: (s.index + 1) % words.length,
          })),
        deleteSpeed
      );
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => setState((s) => ({ ...s, subIndex: s.subIndex + (s.deleting ? -1 : 1) })),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timer);
  }, [state, words, typeSpeed, deleteSpeed, pause]);

  return words[state.index % words.length].substring(0, state.subIndex);
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <ThreeScene />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {role}
            <span className="animate-pulse">|</span>
          </span>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            PATNALA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              HARI KRISHNA
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            {personalInfo.heroTagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={(e) => scrollTo(e, "#projects")}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
            >
              View Projects
            </button>

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
            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-30 rounded-full" />

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          type="button"
          onClick={(e) => scrollTo(e, "#about")}
          aria-label="Scroll to about section"
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}
