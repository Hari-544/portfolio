"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#top" className="text-xl font-bold">
          Hari Krishna
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Hari-544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/p-hari-krishna-424510332/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}
