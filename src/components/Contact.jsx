import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 px-4"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,40,200,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* HEADING */}
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-xl text-center text-slate-300 mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, projects or
          collaborations. Feel free to reach out!
        </p>

        {/* MAIN CARD */}
        <div className="grid md:grid-cols-2 gap-12 bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl">

          {/* LEFT : CONTACT INFO */}
          <div>
            {/* EMAIL */}
            <div className="mb-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/40">
                <FaEnvelope className="text-2xl text-purple-400" />
                <a
                  href="mailto:lalevikram32@gmail.com"
                  className="text-white text-lg"
                >
                  lalevikram32@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="mb-10">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/40">
                <FaPhoneAlt className="text-2xl text-blue-400" />
                <a href="tel:7028617576" className="text-white text-lg">
                  7028617576
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/vikramlale"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/40 text-white flex items-center gap-2 hover:scale-105 transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/vikramlale"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-blue-900/40 border border-blue-700/40 text-white flex items-center gap-2 hover:scale-105 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT : CONTACT FORM (NETLIFY) */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-5"
          >
            {/* REQUIRED hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 text-white outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Project discussion"
              required
              className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 text-white outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <p className="text-center text-slate-400 mt-14">
          © {new Date().getFullYear()} Vikram Lale • MERN Stack Developer
        </p>
      </div>
    </section>
  );
};

export default Contact;
