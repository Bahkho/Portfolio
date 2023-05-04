import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  const [theme, setTheme] = useState(false);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#f1f5f9" : "#111827";
  }, [theme]);

  return (
    <div>
      <Navbar mode={theme} toggle={toggleDarkMode} />
      <Hero mode={theme} />
      <About mode={theme} />
      <SocialLinks mode={theme} />
      <Project mode={theme} />
      <Skills mode={theme} />
      <Contact mode={theme} />
      <BackToTopButton mode={theme} />
    </div>
  );
}
