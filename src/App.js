import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // Scroll reveal animation
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal, .card, .project-card, .about-card");
      reveals.forEach((el, i) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 150;
        if (elementTop < windowHeight - visible) {
          setTimeout(() => el.classList.add("active", "show"), i * 100);
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />   {/* Proper Card-styled About Section */}
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
