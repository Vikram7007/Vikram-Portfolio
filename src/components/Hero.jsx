import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = "Vikram Lale";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Role animation states
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleDisplay, setRoleDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleTypingSpeed, setRoleTypingSpeed] = useState(100);

  // Auto typing animation for name on page load
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Role typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (roleIndex < currentRole.length) {
          setRoleDisplay(currentRole.substring(0, roleIndex + 1));
          setRoleIndex(roleIndex + 1);
          setRoleTypingSpeed(100);
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (roleIndex > 0) {
          setRoleDisplay(currentRole.substring(0, roleIndex - 1));
          setRoleIndex(roleIndex - 1);
          setRoleTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, roleTypingSpeed);
    return () => clearTimeout(timer);
  }, [roleIndex, isDeleting, currentRoleIndex, roleTypingSpeed]);

  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center
        px-6 text-center overflow-hidden
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      "
    >
      {/* ANIMATED BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      
      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl animate-fadeIn">
        {/* GREETING TEXT */}
        <div className="mb-6 opacity-0 animate-slideDown" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* MAIN HEADING WITH TYPING EFFECT */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight opacity-0 animate-slideDown" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Hi, I'm{" "}
          <span
            className="
              inline-block
              bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]
            "
          >
            {displayText}
            {index < fullText.length && (
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            )}
          </span>
        </h1>

        {/* ROLE TEXT WITH TYPING ANIMATION */}
        <div className="mb-6 opacity-0 animate-slideDown" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent min-h-[2.5rem] flex items-center justify-center">
            <span className="inline-flex items-center">
              {roleDisplay}
              <span className="ml-1 inline-block w-0.5 h-7 bg-gradient-to-b from-purple-400 to-cyan-400 animate-blink"></span>
            </span>
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-slideDown" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Engineering student focused on building{" "}
          <span className="text-purple-400 font-semibold">modern</span>,{" "}
          <span className="text-cyan-400 font-semibold">scalable</span> and{" "}
          <span className="text-blue-400 font-semibold">high-performance</span>{" "}
          full-stack web applications using the MERN stack.
        </p>

        {/* CTA BUTTONS */}
        <div className="opacity-0 animate-slideDown flex flex-col sm:flex-row gap-5 justify-center items-center" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a
            href="#projects"
            className="
              group inline-flex items-center gap-3
              px-10 py-4 rounded-full font-semibold text-lg
              bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500
              hover:from-purple-500 hover:to-cyan-400
              shadow-[0_0_30px_rgba(147,51,234,0.3)]
              hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]
              hover:scale-105
              transition-all duration-300
              relative overflow-hidden
            "
          >
            <span className="relative z-10 text-white">View Projects</span>
            <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href="/resume.pdf"
            download="Vikram_Lale_Resume.pdf"
            className="
              group inline-flex items-center gap-3
              px-10 py-4 rounded-full font-semibold text-lg
              bg-slate-800/50 backdrop-blur-sm
              border-2 border-purple-500/50
              hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20
              hover:border-purple-400
              shadow-[0_0_20px_rgba(147,51,234,0.2)]
              hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]
              hover:scale-105
              transition-all duration-300
              relative overflow-hidden
            "
          >
            <span className="relative z-10 text-white">Download Resume</span>
            <svg className="relative z-10 w-5 h-5 text-purple-400 group-hover:text-cyan-400 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-16 opacity-0 animate-slideDown" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-sm">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;