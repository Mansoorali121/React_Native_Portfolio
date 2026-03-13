

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
