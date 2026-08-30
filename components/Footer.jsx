import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black/40 border-t border-white/10">
      <p className="text-center text-gray-400">
        © {new Date().getFullYear()} {personalInfo.shortName}. All rights
        reserved.
      </p>
      <a
        href="#top"
        className="block text-center text-sm text-cyan-400 hover:text-cyan-300 mt-4 transition-colors"
      >
        Back to top
      </a>
    </footer>
  );
}
