import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [theme, setTheme] = useState(true);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#ffffff" : "#18181B";
  }, [theme]);

  return (
    <div>
      <Navbar mode={theme} toggle={toggleDarkMode} />
      <Hero mode={theme}/>
    </div>
  );
}
