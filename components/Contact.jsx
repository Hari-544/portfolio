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
      <h2 className="text-5xl font-bold mb-12">Contact</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {contactItems.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10 transition-colors"
          >
            <Icon className="text-cyan-400 mb-3" size={24} />
            <h3 className="font-bold">{label}</h3>
            <p className="text-gray-300 mt-1 break-all">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
