import { useEffect, useRef, useState } from "react";

const Education = () => {
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

  const educationData = [
    {
      type: "Graduation",
      degree: "B.Tech – Computer Science & Engineering",
      institution: "CSMSS Chh. Shahu College of Engineering",
      location: "Chh. Sambhajinagar",
      duration: "2022 – 2026",
      icon: "🎓",
      gradient: "from-purple-500 to-pink-500",
      badge: "Current",
      tagColor: "cyan",
    },
    {
      type: "Higher Secondary",
      degree: "HSC (12th) – Science Stream",
      institution: "Lal Bahadur Shastri Mahavidyalaya",
      location: "Dharmabad",
      duration: "Passed : 2022",
      icon: "📚",
      gradient: "from-cyan-500 to-blue-500",
      badge: "Completed",
      tagColor: "purple",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="
        relative py-32 px-6
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        overflow-hidden
      "
    >
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      {/* GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute top-40 left-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
      <div className="absolute top-56 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-48 left-48 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Academic Journey</span>
          </div>
          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
              bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
            "
          >
            Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
            My academic background and qualifications in computer science and engineering
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
          </div>
        </div>

        {/* EDUCATION CARDS */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`
                group relative
                bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_60px_rgba(147,51,234,0.4)]
                hover:border-purple-500/40
                hover:-translate-y-3
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* CARD GLOW EFFECT */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${edu.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* HEADER WITH ICON */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{edu.icon}</span>
                    </div>
                    <div>
                      <span className={`text-xs tracking-widest uppercase font-bold ${edu.tagColor === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                        {edu.type}
                      </span>
                      <div className="mt-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${edu.tagColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-purple-500/20 text-purple-300 border border-purple-400/30'}`}>
                          {edu.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* CARD NUMBER */}
                  <span className="text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* DEGREE NAME */}
                <h3
                  className="
                    text-2xl font-bold mb-4 leading-tight
                    bg-gradient-to-r from-white via-slate-200 to-slate-300
                    bg-clip-text text-transparent
                    group-hover:from-purple-300 group-hover:to-cyan-300
                    transition-all duration-300
                  "
                >
                  {edu.degree}
                </h3>

                {/* INSTITUTION */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-cyan-400 mt-1">🏛️</span>
                    <p className="text-slate-200 text-lg font-semibold leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ml-9">
                    <span className="text-purple-400">📍</span>
                    <p className="text-slate-400 text-base">
                      {edu.location}
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* DURATION */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📅</span>
                    <span className="text-slate-300 font-medium">{edu.duration}</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.gradient} animate-pulse`} />
                </div>
              </div>

              {/* DECORATIVE CORNER ELEMENTS */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-purple-500/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* TIMELINE CONNECTOR */}
        <div 
          className={`
            flex items-center justify-center mt-12 mb-8
            transition-all duration-1000
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-32 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500" />
            <span className="text-slate-400 text-sm font-medium px-4">Academic Timeline</span>
            <div className="w-32 h-[2px] bg-gradient-to-l from-purple-500 via-cyan-500 to-blue-500" />
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div
          className={`
            text-center mt-8
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-slate-400 text-base">
            Continuously learning and expanding my knowledge in computer science and software development 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;