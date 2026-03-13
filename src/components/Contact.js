import { motion } from "framer-motion";
import { Send, Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-24 bg-black text-white"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          Get In Touch
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mt-3
        bg-gradient-to-r from-white via-gray-300 to-gray-500
        bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Got a project idea or collaboration request?
          Let’s build something amazing together 🚀
        </p>
      </motion.div>

      {/* Form */}

      <motion.form
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto
        backdrop-blur-xl bg-white/10
        border border-white/20
        rounded-2xl shadow-2xl p-8 md:p-12"
      >

        {/* Name & Email */}

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Full Name"
            required
            className="w-full px-4 py-3 rounded-xl
            bg-white/5 border border-white/20
            focus:border-white/50 focus:ring-2 focus:ring-white/20
            outline-none transition duration-300"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="w-full px-4 py-3 rounded-xl
            bg-white/5 border border-white/20
            focus:border-white/50 focus:ring-2 focus:ring-white/20
            outline-none transition duration-300"
          />

        </div>

        {/* Message */}

        <textarea
          rows="5"
          placeholder="Write your message..."
          required
          className="mt-6 w-full px-4 py-3 rounded-xl
          bg-white/5 border border-white/20
          focus:border-white/50 focus:ring-2 focus:ring-white/20
          outline-none resize-none transition duration-300"
        ></textarea>

        {/* Button */}

        <div className="mt-8 flex justify-center">

          <button
            type="submit"
            className="relative inline-flex items-center gap-2 px-8 py-3
            rounded-full border border-white/30
            bg-white/10 backdrop-blur-lg
            hover:bg-white/20 transition duration-300
            hover:scale-105 shadow-lg"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>

        </div>

      </motion.form>

      {/* Social Section */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >

        <div className="flex justify-center gap-6">

          {[
            { icon: Linkedin, link: "https://linkedin.com" },
            { icon: Github, link: "https://github.com" },
            { icon: Twitter, link: "https://twitter.com" },
            { icon: Mail, link: "mailto:youremail@example.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full
              bg-white/10 border border-white/20
              backdrop-blur-lg
              hover:scale-110 hover:bg-white/20
              transition duration-300"
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}

        </div>

        <p className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="text-white font-semibold">
            Mansoor Ali
          </span>
        </p>

      </motion.div>

    </section>
  );
}