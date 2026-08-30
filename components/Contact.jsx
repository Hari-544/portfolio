"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: FaEnvelope,
    },
    {
      label: "LinkedIn",
      value: "p-hari-krishna",
      href: personalInfo.linkedin,
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "Hari-544",
      href: personalInfo.github,
      icon: FaGithub,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">Contact</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {contactItems.map(({ label, value, href, icon: Icon }, i) => (
          <motion.a
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="text-cyan-400 mb-3" size={28} />
            <h3 className="font-bold text-white">{label}</h3>
            <p className="text-gray-300 mt-1 break-all">{value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
