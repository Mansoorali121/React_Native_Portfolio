import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import WhatsApp from "./WhatsApp.jpeg";
import Ecommerce from "./Ecommerce.jpg";
import Social from "./SocialApp.jpg";
import SocialApp1 from "./SocialApp1.jpg";
import SocialApp2 from "./SocialApp2.jpg";
import SocialApp3 from "./SocialAPp3.jpg";

export default function Testimonials() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "WhatsApp Clone",
      feedback:
        "A modern WhatsApp clone with real-time chat, sleek UI, and responsive design.",
      projectImages: [WhatsApp, WhatsApp, WhatsApp],
    },
    {
      title: "E-Commerce App",
      feedback:
        "A professional e-commerce app with product listings, cart, and secure checkout.",
      projectImages: [Ecommerce, Ecommerce, Ecommerce],
    },
    {
      title: "Social Media App",
      feedback:
        "A social networking app designed for smooth interactions and beautiful UI.",
      projectImages: [Social, SocialApp1, SocialApp2, SocialApp3],
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-6 md:px-20 py-24 bg-black text-white"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          Recent Work
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mt-3
        bg-gradient-to-r from-white via-gray-300 to-gray-500
        bg-clip-text text-transparent">
          Projects Showcase
        </h2>
      </motion.div>

      {/* Projects Grid */}

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20
            rounded-2xl shadow-xl overflow-hidden transition-all duration-300
            hover:border-white/40"
          >

            {/* Image */}

            <div className="h-60 overflow-hidden flex items-center justify-center bg-white/5">

              <img
                src={project.projectImages[0]}
                alt={project.title}
                className="h-full object-contain transition duration-500 hover:scale-110"
              />

            </div>

            {/* Content */}

            <div className="p-6 text-left">

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {project.feedback}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 w-full px-4 py-2
                bg-white/10 border border-white/30
                rounded-xl backdrop-blur-lg
                hover:bg-white/20 transition duration-300
                hover:scale-105"
              >
                View More
              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >

            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-black/90 backdrop-blur-xl
              border border-white/20
              rounded-2xl shadow-2xl
              max-w-5xl w-full relative
              max-h-[90vh] overflow-y-auto"
            >

              {/* Close Button */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white
                hover:scale-110 transition"
              >
                <X size={24} />
              </button>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {selectedProject.feedback}
                </p>

                {/* Images */}

                <div className="grid md:grid-cols-2 gap-6">

                  {selectedProject.projectImages.map((img, i) => (

                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="rounded-xl border border-white/20
                      shadow-lg object-contain w-full h-64
                      bg-white/5 hover:scale-105 transition duration-300"
                    />

                  ))}

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}