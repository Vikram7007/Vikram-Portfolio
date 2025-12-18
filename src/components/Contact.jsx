import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact"className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 px-4">
      {/* ANIMATED BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,40,200,0.1),transparent_50%)]"></div>
      
      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* HEADING WITH GRADIENT */}
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in]">
          Get In Touch
        </h2>
        
        {/* SUBTEXT */}
        <p className="text-xl text-center text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-in_0.2s_backwards]">
          I'm always open to discussing new opportunities, projects or
          collaborations. Feel free to reach out!
        </p>

        {/* CONTACT CARD WITH GLASS EFFECT */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 animate-[fadeIn_1s_ease-in_0.4s_backwards]">
          {/* EMAIL */}
          <div className="mb-8 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 hover:from-purple-900/40 hover:to-slate-800/60 transition-all duration-300 border border-slate-700/30 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-700/30 text-purple-300 group-hover:from-purple-600/50 group-hover:to-purple-700/50 transition-all duration-300 group-hover:scale-110">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1 font-medium">Email</p>
                <a href="mailto:lalevikram32@gmail.com" className="text-white text-lg font-medium hover:text-purple-300 transition-colors">
                  lalevikram32@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="mb-10 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 hover:from-blue-900/40 hover:to-slate-800/60 transition-all duration-300 border border-slate-700/30 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-700/30 text-blue-300 group-hover:from-blue-600/50 group-hover:to-blue-700/50 transition-all duration-300 group-hover:scale-110">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1 font-medium">Phone</p>
                <a href="tel:7028617576" className="text-white text-lg font-medium hover:text-blue-300 transition-colors">
                  7028617576
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 justify-center flex-wrap">
            <a
              href="https://github.com/vikramlale"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-800/40 hover:from-slate-700/60 hover:to-slate-700/40 rounded-2xl transition-all duration-300 hover:scale-105 group border border-slate-700/30 hover:border-slate-500/50 hover:shadow-lg hover:shadow-slate-500/20"
            >
              <FaGithub className="text-2xl text-slate-300 group-hover:text-white transition-all duration-300 group-hover:rotate-12" />
              <span className="text-slate-200 group-hover:text-white transition-colors font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vikramlale"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900/30 to-slate-800/40 hover:from-blue-800/40 hover:to-blue-900/40 rounded-2xl transition-all duration-300 hover:scale-105 group border border-blue-700/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaLinkedin className="text-2xl text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
              <span className="text-slate-200 group-hover:text-white transition-colors font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center text-slate-400 mt-14 text-base animate-[fadeIn_1s_ease-in_0.6s_backwards]">
          © {new Date().getFullYear()} Vikram Lale • MERN Stack Developer
        </p>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;