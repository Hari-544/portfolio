"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-cyan-400 origin-left"
        style={{ scaleX: progress }}
      />

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
        >
          Hari Krishna
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`transition-colors ${
                active === link.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Hari-544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/p-hari-krishna-424510332/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden ml-2 text-gray-200 hover:text-cyan-400"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`block px-6 py-4 border-b border-white/5 ${
                active === link.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
