import { useEffect, useState } from "react";
import Header from "./components/Head/Header";
import Home from "./components/Hero/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./App.css";

const FloatingNav = () => (
  <nav className="floating-nav" aria-label="Quick section navigation">
    <span className="floating-nav-label">Jump to</span>
    <a href="#resume">Resume</a>
    <a href="#portfolio">Work</a>
    <a href="#contact">Contact</a>
  </nav>
);

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="site-shell">
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <FloatingNav />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
