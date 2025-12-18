import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative py-10 px-6
        bg-gradient-to-br from-[#020617] via-[#0b122a] to-[#020617]
        border-t border-white/10
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* NAME */}
        <h3
          className="
            text-lg font-semibold
            bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
            bg-clip-text text-transparent
          "
        >
          Vikram Lale
        </h3>

        {/* ROLE */}
        <p className="text-slate-400 mt-1">
          MERN Stack Developer
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Vikram7007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/vikram-lale-a54a0b31a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-slate-500 text-sm mt-6">
          © {new Date().getFullYear()} Vikram Lale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
