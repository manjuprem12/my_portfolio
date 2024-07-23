
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Summary from './components/summary';
import Experience from './components/experience/index';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Summary />
      <Contact />
    </main>
  );
}