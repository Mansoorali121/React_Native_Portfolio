import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import WhatsApp from "./WhatsApp.jpeg";
import Ecommerce from "./Ecommerce.jpg";
import Social from "./SocialApp.jpg";
import SocialApp1 from "./SocialApp1.jpg";
import SocialApp2 from "./SocialApp2.jpg";
import SocialApp3 from "./SocialAPp3.jpg";
import Ft1 from "../Assets/Ft1.jpeg";
import Ft2 from "../Assets/Ft2.jpeg";
import Ft3 from "../Assets/Ft3.jpeg";
//
import ft4 from "../Assets/ft4.jpeg";
import ft5 from "../Assets/ft5.jpeg";
import ft6 from "../Assets/ft6.jpeg";
import ft7 from "../Assets/ft7.jpeg";
import ft8 from "../Assets/ft8.jpeg";
import ft9 from "../Assets/ft9.jpeg";
//
import w1 from "../Assets/w1.jpeg";
import w2 from "../Assets/w2.jpeg";
import w3 from "../Assets/w3.jpeg";
//
import u1 from "../Assets/u1.jpeg";
import u2 from "../Assets/u2.jpeg";
import u3 from "../Assets/u3.jpeg";
import u4 from "../Assets/u4.jpeg";
import u5 from "../Assets/u5.jpeg";

//
import s1 from "../Assets/s1.jpeg";
import s2 from "../Assets/s2.jpeg";
import s3 from "../Assets/s3.jpeg";
//

import D1 from "../Assets/D1.jpeg";
import D2 from "../Assets/D2.jpeg";
import D3 from "../Assets/D3.jpeg";
import D4 from "../Assets/D4.jpeg";
//
import n1 from "../Assets/n1.jpeg";
import n2 from "../Assets/n2.jpeg";
import n3 from "../Assets/n3.jpeg";
import n4 from "../Assets/n4.jpeg";
import n5 from "../Assets/n5.jpeg";
import n6 from "../Assets/n6.jpeg";
import n7 from "../Assets/n7.jpeg";
import n8 from "../Assets/n8.jpeg";
// 

import std1 from "../Assets/std1.jpeg";
import std2 from "../Assets/std2.jpeg";
import std3 from "../Assets/std3.jpeg";
// 
import i11 from "../Assets/i11.jpeg";

import i1 from "../Assets/i1.jpeg";
import i2 from "../Assets/i2.jpeg";
import i3 from "../Assets/i3.jpeg";
import i4 from "../Assets/i4.jpeg";
import i5 from "../Assets/i5.jpeg";
import i6 from "../Assets/i6.jpeg";
import i7 from "../Assets/i7.jpeg";
import i8 from "../Assets/i8.jpeg";
import i9 from "../Assets/i9.jpeg";
import i10 from "../Assets/i10.jpeg";
import i12 from "../Assets/i12.jpeg";
import i13 from "../Assets/i13.jpeg";
import i14 from "../Assets/i14.jpeg";






export default function Testimonials() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Rect Native Based E-Commerce App with Admin Panel ( Firebase)",
      feedback:
        "Built a React Native E-commerce mobile application using Firebase Firestore for backend services. Implemented an admin panel to manage products and data dynamically. Designed the app using reusable components and modular architecture to ensure scalability, maintainability, and efficient UI development.",
      projectImages: [n1, n2, n3, n4, n5, n6, n7, n8],
    },
    {
      title: "Student Management App UI Design ",
      feedback:
        "A React Native Based Student Management Mobile App with react native size matters library and reuseable compoments & animations.",
         projectImages:[std1,std2,std3],
      },
      {
      title: "Indeed Job Finder Clone (React Native) ",
      feedback:"A React Native job search application inspired by Indeed. The app allows users to browse and view job listings with a clean UI. Firebase Firestore is used for backend data storage, and reusable components are implemented to maintain a scalable and organized code structure",
         projectImages:[i11,i1,i2,i3,i4,i5, i6,i7,i8,i9,i10,i12,i13, i14],
      },
    {
      title: "Rect Native Based Food App UI Design ",
      feedback:
        "A modern Food App UI Design with react native size-matters library and animation ( Reuseable components).",
      projectImages: [D1, D2, D3, D4],
    },
    {
      title: "WhatsApp UI Design",
      feedback:
        "A modern WhatsApp UI Design with real-time chat, sleek UI, and responsive design.",
      projectImages: [WhatsApp, w3, w2, w1],
    },
    {
      title:
        "E-Commerce App UI Design With Firebase Integration ( Crud operations)",
      feedback:
        "A professional e-commerce app with product listings, cart, and secure checkout.",
      projectImages: [Ecommerce, Ft1, Ft2, Ft3, ft4, ft5, ft6, ft7, ft8, ft9],
    },
    {
      title: "Social Media App",
      feedback:
        "A social networking app designed for smooth interactions and beautiful UI.",
      projectImages: [Social, SocialApp1, SocialApp2, SocialApp3],
    },
    {
      title: "User Profile UI Design App ",
      feedback: "A user profile React Native app  with beautiful UI.",
      projectImages: [u1, u2, u3, u4, u5],
    },
    {
      title: "Online Skill Assesments App UI Design ( API Integration) ",
      feedback:
        "An online Skill assesment  React Native app  with beautiful UI & course completion certificate.",
      projectImages: [s1, s2, s3],
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

        <h2
          className="text-3xl md:text-5xl font-extrabold mt-3
        bg-gradient-to-r from-white via-gray-300 to-gray-500
        bg-clip-text text-transparent"
        >
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
              <h3 className="text-xl font-bold">{project.title}</h3>

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

                <p className="text-gray-300 mb-6">{selectedProject.feedback}</p>

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
