"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Hari Krishna
        </h1>

        <div className="flex gap-4">
          <a
            href="https://github.com/Hari-544"
            target="_blank"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/p-hari-krishna-424510332/"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}