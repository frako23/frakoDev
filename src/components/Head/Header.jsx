/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./header.css";
// import logo from "../pic/logo.png"

const Header = ({ theme, onToggleTheme }) => {
  // fixed Header
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <a className="logo" href="#home" aria-label="Francisco Orozco home">
            <span className="logo-mark">FR</span>
            <span className="logo-copy">
              <strong>Francisco Orozco</strong>
              <small>IT Development Lead</small>
            </span>
          </a>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="#home">home</a>
              </li>
              {/* <li>
                <a href='#features'>features</a>
              </li> */}
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li> */}
              <li>
                <a href="#contact">contact</a>
              </li>
              <li className="theme-item">
                <button type="button" className="theme-toggle" onClick={onToggleTheme}>
                  {theme === "dark" ? "light mode" : "dark mode"}
                </button>
              </li>
              {/* <li>
                <button className='home-btn'>BUY NOW</button>
              </li> */}
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
