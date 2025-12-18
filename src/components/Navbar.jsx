import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Smooth fade-down on load
  useEffect(() => {
    setShow(true);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${scrolled 
          ? "bg-slate-950/95 backdrop-blur-2xl shadow-2xl shadow-purple-900/10 py-3" 
          : "bg-slate-950/80 backdrop-blur-xl py-5"}
      `}
    >
      {/* GRADIENT BORDER */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO WITH GLOW EFFECT */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <h1 className="relative text-2xl md:text-3xl font-black tracking-tight
            bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
            bg-clip-text text-transparent
            hover:scale-105 transition-transform duration-300 cursor-pointer
            animate-[shimmer_3s_ease-in-out_infinite]">
            Vikram<span className="text-white/90">.dev</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-2 text-base font-semibold">
          {["About", "Skills", "Projects", "Education", "Contact"].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            
            return (
              <li key={id} className="relative group">
                <a
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`
                    relative px-5 py-2.5 rounded-xl
                    transition-all duration-300
                    ${isActive 
                      ? "text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 shadow-lg shadow-purple-500/20" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"}
                  `}
                >
                  {/* TEXT */}
                  <span className="relative z-10">{item}</span>
                  
                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></span>
                  )}
                </a>

                {/* UNDERLINE ANIMATION */}
                <span
                  className="
                    absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-0
                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                    group-hover:w-3/4
                    transition-all duration-500 ease-out
                    rounded-full
                  "
                />
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden relative group p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-7 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
            <span className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-7 transition-all duration-300"></span>
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;