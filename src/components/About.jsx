import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* SECTION HEADER */}
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="inline-block mb-4">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get to know me</span>
        </div>
        <h2
          className="
            text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
            bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
          "
        >
          About Me
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="w-16 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* LEFT CARD - Main Info */}
        <div
          className={`
            relative group
            bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80
            backdrop-blur-xl
            border border-purple-500/20
            rounded-3xl
            p-8
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_8px_50px_rgba(147,51,234,0.3)]
            hover:border-purple-500/40
            transition-all duration-500
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}
          style={{ transitionDelay: '200ms' }}
        >
          {/* GLOW EFFECT */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            {/* ICON */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30">
              <span className="text-3xl">👨‍💻</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              Background
              <span className="text-cyan-400 text-lg">✨</span>
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I am a{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text font-semibold">
                Computer Science engineering student
              </span>{" "}
              with a strong passion for{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text font-semibold">
                full-stack web development
              </span>
              . I love building modern, scalable and user-friendly web applications
              using the MERN stack.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Student
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Developer
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Problem Solver
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD - Focus Areas */}
        <div
          className={`
            relative group
            bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80
            backdrop-blur-xl
            border border-cyan-500/20
            rounded-3xl
            p-8
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_8px_50px_rgba(34,211,238,0.3)]
            hover:border-cyan-500/40
            transition-all duration-500
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}
          style={{ transitionDelay: '400ms' }}
        >
          {/* GLOW EFFECT */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            {/* ICON */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
              <span className="text-3xl">🎯</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              What I Focus On
              <span className="text-purple-400 text-lg">🚀</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 group-hover/item:scale-125 transition-transform" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Writing <span className="text-purple-300 font-semibold">clean, maintainable code</span> that follows best practices
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/item:scale-125 transition-transform" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Designing <span className="text-cyan-300 font-semibold">intuitive user interfaces</span> with great UX
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/item:scale-125 transition-transform" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Creating <span className="text-blue-300 font-semibold">efficient backend logic</span> and APIs
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover/item:scale-125 transition-transform" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Continuously <span className="text-purple-300 font-semibold">upgrading my skills</span> to match industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div
        className={`
          max-w-5xl mx-auto mt-12
          grid grid-cols-2 md:grid-cols-4 gap-6
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        style={{ transitionDelay: '600ms' }}
      >
        {[
          { icon: "💻", label: "MERN Stack", value: "Specialist" },
          { icon: "🎨", label: "UI/UX", value: "Focused" },
          { icon: "⚡", label: "Performance", value: "Optimized" },
          { icon: "📚", label: "Learning", value: "Always" }
        ].map((stat, index) => (
          <div
            key={index}
            className="
              group relative
              bg-gradient-to-br from-slate-900/60 to-slate-800/60
              backdrop-blur-sm
              border border-white/5
              rounded-2xl
              p-6
              text-center
              hover:border-cyan-400/30
              hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              transition-all duration-300
            "
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;