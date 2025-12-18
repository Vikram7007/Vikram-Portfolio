import { useEffect, useRef, useState } from "react";
import rentzoneImg from "../assets/rentzone.png";
import contractorImg from "../assets/contractor.png";
import windowImg from "../assets/windowworld.png";

const projects = [
  {
    name: "RentZone",
    image: rentzoneImg,
    desc: "A MERN stack rental platform that allows users to search, list and rent products with authentication, filters and responsive UI.",
    tech: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/Vikram7007/RentZone",
    category: "Full Stack",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Contractor Connect",
    image: contractorImg,
    desc: "A service-based MERN application connecting users with verified contractors for construction and repair services.",
    tech: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/Vikram7007/Contractor_Sarthi",
    category: "Full Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Window World",
    image: windowImg,
    desc: "A modern exterior remodeling website UI inspired by real-world business sites, focusing on clean design and responsiveness.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    category: "Frontend",
    gradient: "from-blue-500 to-purple-500",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
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
      id="projects"
      ref={sectionRef}
      className="
        relative py-32 px-6
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        overflow-hidden
      "
    >
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute top-20 -left-32 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-20 -right-32 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      
      {/* GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute top-40 left-24 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
      <div className="absolute top-56 right-36 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-48 left-44 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          </div>
          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
              bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
            "
          >
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
            A collection of my recent work showcasing full-stack development and modern web technologies
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
          </div>
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`
                group relative
                bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                backdrop-blur-xl
                border border-white/10
                rounded-3xl overflow-hidden
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_60px_rgba(147,51,234,0.4)]
                hover:border-purple-500/40
                hover:-translate-y-3 hover:scale-[1.02]
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* CARD GLOW EFFECT */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* IMAGE CONTAINER */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* IMAGE OVERLAY */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* CATEGORY BADGE */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white shadow-lg backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* PROJECT NUMBER */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-6xl font-bold text-white/10">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                {/* PROJECT NAME */}
                <h3
                  className="
                    text-2xl font-bold mb-3
                    bg-gradient-to-r from-white to-slate-300
                    bg-clip-text text-transparent
                    group-hover:from-purple-300 group-hover:to-cyan-300
                    transition-all duration-300
                  "
                >
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`
                        text-xs px-3 py-1.5 rounded-full font-medium
                        bg-slate-950/50 text-cyan-300
                        border border-cyan-400/20
                        hover:border-cyan-400/50 hover:bg-cyan-400/10
                        transition-all duration-300
                        ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-70'}
                      `}
                      style={{
                        transitionDelay: hoveredProject === index ? `${techIndex * 50}ms` : '0ms'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINK BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group/btn inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    bg-gradient-to-r ${project.gradient}
                    text-white font-semibold text-sm
                    shadow-lg hover:shadow-xl
                    hover:gap-3
                    transition-all duration-300
                    relative overflow-hidden
                  `}
                >
                  <span className="relative z-10">View Project</span>
                  <svg 
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </a>
              </div>

              {/* DECORATIVE CORNER LINES */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-slate-400 text-lg mb-6">
            Want to see more? Check out my GitHub for additional projects! 🚀
          </p>
          <a
            href="https://github.com/Vikram7007"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              px-8 py-3 rounded-full
              bg-slate-800/50 backdrop-blur-sm
              border border-white/10
              text-slate-300 font-semibold
              hover:border-purple-500/50 hover:bg-slate-800/80
              hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
              transition-all duration-300
            "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;