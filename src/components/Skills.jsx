import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skills = [
    {
      title: "Frontend Development",
      emoji: "🎨",
      gradient: "from-purple-500 to-pink-500",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 88 },
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 90 },
      ],
    },
    {
      title: "Backend Development",
      emoji: "⚙️",
      gradient: "from-cyan-500 to-blue-500",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 82 },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 85 },
      ],
    },
    {
      title: "Development Tools",
      emoji: "🛠️",
      gradient: "from-blue-500 to-purple-500",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 85 },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" />, level: 88 },
        { name: "VS Code", icon: <VscCode className="text-blue-400" />, level: 92 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      {/* GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute top-32 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
      <div className="absolute top-48 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">My Expertise</span>
          </div>
          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
              bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
            "
          >
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
            A comprehensive toolkit of modern technologies I use to bring ideas to life
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
          </div>
        </div>

        {/* SKILL CARDS GRID */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`
                relative group/card
                bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)]
                hover:border-purple-500/30
                hover:-translate-y-2
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${groupIndex * 150}ms` }}
            >
              {/* CARD GLOW EFFECT */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${group.gradient} rounded-3xl blur opacity-0 group-hover/card:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* CARD HEADER */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${group.gradient} shadow-lg`}>
                    <span className="text-3xl">{group.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* SKILLS LIST */}
                <ul className="space-y-4">
                  {group.items.map((skill, skillIndex) => (
                    <li
                      key={skill.name}
                      className={`
                        group/item relative
                        bg-slate-950/50
                        border border-white/5
                        rounded-xl p-4
                        hover:bg-slate-950/80
                        hover:border-cyan-400/30
                        hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                        transition-all duration-300
                        cursor-pointer
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
                      `}
                      style={{ transitionDelay: `${groupIndex * 150 + skillIndex * 80}ms` }}
                      onMouseEnter={() => setHoveredSkill(`${groupIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl group-hover/item:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <span className="text-slate-200 font-semibold text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-cyan-400 font-bold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* PROGRESS BAR */}
                      <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${group.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: hoveredSkill === `${groupIndex}-${skillIndex}` || isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${groupIndex * 150 + skillIndex * 80 + 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD NUMBER */}
              <div className={`absolute top-6 right-6 text-6xl font-bold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent opacity-10 group-hover/card:opacity-20 transition-opacity`}>
                0{groupIndex + 1}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          className={`
            text-center mt-16
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-slate-400 text-lg mb-6">
            Always learning and exploring new technologies 🚀
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 font-semibold">Currently expanding my skillset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;