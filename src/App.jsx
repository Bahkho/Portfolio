import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  const [theme, setTheme] = useState(true);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#f1f5f9" : "#111827";
  }, [theme]);

  return (
    <div>
      <Navbar mode={theme} toggle={toggleDarkMode} />
      <Hero mode={theme}/>
      <About mode={theme}/>
    </div>
  );
}
