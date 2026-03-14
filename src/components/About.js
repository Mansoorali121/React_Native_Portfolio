import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Mansoor from "./Mansoor.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center gap-16 px-6 md:px-20 py-24 bg-black text-white"
    >
      {/* LEFT IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2 flex justify-center"
      >
        <div className="relative group">

          {/* glow background */}

          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent blur-3xl rounded-full"></div>

          {/* rotating ring */}

          <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-white/20 rounded-full animate-spin-slow"></div>

          <img
            src={Mansoor}
            alt="About Me"
            className="relative w-64 md:w-[360px] lg:w-[400px] rounded-2xl border border-white/20 shadow-2xl object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        {/* small heading */}

        <p className="text-gray-400 uppercase tracking-widest text-sm">
          About
        </p>

        {/* main heading */}

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-8
        bg-gradient-to-r from-white via-gray-300 to-gray-500 
        bg-clip-text text-transparent"
        >
          About Me
        </h1>

        {/* TEXT 2 COLUMNS */}

        <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-base leading-relaxed">

          <p>
            I am a motivated programmer who loves learning new skills.
            With strong interest in Mobile App Development and Artificial
            Intelligence, I enjoy solving problems and working independently.
          </p>

          <p>
            I always explore new ideas and turn them into practical solutions.
            My goal is to continuously improve myself and build impactful
            mobile applications.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">

          {/* Download CV */}

          <a
            href="/Mansoor_React_Native.pdf"
            download
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3 
            rounded-full border border-white/30 bg-white/10 backdrop-blur-lg
            text-white font-medium overflow-hidden group"
          >

            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            <Download className="w-5 h-5 relative z-10" />

            <span className="relative z-10">Download My CV</span>

          </a>

          {/* Contact */}

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3 
            rounded-full border border-white/30 bg-white/10 backdrop-blur-lg
            text-white font-medium overflow-hidden group"
          >

            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            <Mail className="w-5 h-5 relative z-10" />

            <span className="relative z-10">
              Lets Connect to Build Something Great
            </span>

          </a>

        </div>
      </motion.div>
    </section>
  );
}