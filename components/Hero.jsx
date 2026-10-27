"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import ThreeScene from "./ThreeScene";

const ROLES = ["AI & ML Student", "Web Developer", "Curious Builder"];

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 38, pause = 1500) {
  const [state, setState] = useState({ index: 0, subIndex: 0, deleting: false });

  useEffect(() => {
    const { index, subIndex, deleting } = state;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const timer = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && subIndex === 0) {
      const timer = setTimeout(
        () => setState((s) => ({ ...s, deleting: false, index: (s.index + 1) % words.length })),
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
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_35%,rgba(8,145,178,0.16),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(37,99,235,0.12),transparent_40%)]" />
      <ThreeScene />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
            {role}
            <span className="animate-pulse text-cyan-400" aria-hidden="true">▍</span>
          </span>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
            Hello, I'm
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Hari Krishna
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Patnala.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            {personalInfo.heroTagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "#projects")}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Explore projects <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="inline-flex min-h-12 items-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
            <a className="inline-flex items-center gap-2 transition hover:text-cyan-200" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-cyan-200" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>B.Tech AIML · Class of 2028</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.04] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/75 px-3 py-2 text-xs font-medium text-gray-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Learning · Building · Improving
            </div>
            <Image
              src="/images/hari-formal.jpg"
              alt="Portrait of Hari Krishna"
              width={640}
              height={760}
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="relative z-0 aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-cyan-300/20 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
            <p className="text-xs text-gray-400">Currently focused on</p>
            <p className="mt-1 text-sm font-semibold text-cyan-200">AI · Web · Product thinking</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => scrollTo(e, "#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 transition hover:text-cyan-200 md:flex"
      >
        Scroll to explore <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
