

import { useState, useEffect } from "react";
import Mypic from "./Mypic.jpeg";

export default function Hero() {

  const name = "Mansoor Ali";
  const role = "React Native Developer";

  const [displayName, setDisplayName] = useState("");
  const [displayRole, setDisplayRole] = useState("");

  useEffect(() => {
    let i = 0;

    const nameTyping = setInterval(() => {
      setDisplayName(name.slice(0, i + 1));
      i++;

      if (i === name.length) {
        clearInterval(nameTyping);

        let j = 0;

        const roleTyping = setInterval(() => {
          setDisplayRole(role.slice(0, j + 1));
          j++;

          if (j === role.length) {
            clearInterval(roleTyping);
          }
        }, 120);

      }

    }, 120);

    return () => clearInterval(nameTyping);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-24 bg-black text-white"
    >

      {/* LEFT CONTENT */}

      <div className="max-w-xl text-center md:text-left backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hero-text">

        <p className="text-gray-300 text-lg">Hi, I am</p>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          {displayName}
          <span className="animate-pulse">|</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mt-3">
          {displayRole}
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed">
          I am a React Native Mobile Application Developer with over 1 year+  
          Self Learning Experince. I build apps which solve real world problems with
          elegant and scalable solutions.
        </p>

        <button className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full shadow-lg hover:scale-110 transition duration-300">
          Get in Touch
        </button>

      </div>

      {/* RIGHT IMAGE */}

      <div className="relative mt-12 md:mt-0 flex justify-center items-center hero-image">

        {/* Rotating Ring */}

        <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white/40 border-dashed spin-slow"></div>

        {/* Second Opposite Ring */}

        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/20 border-dashed spin-reverse"></div>

        {/* Profile Image */}

        <img
          src={Mypic}
          alt="Hero"
          className="relative w-44 h-44 md:w-72 md:h-72 rounded-full object-cover border-2 border-white shadow-2xl floating"
        />

      </div>

    </section>
  );
}