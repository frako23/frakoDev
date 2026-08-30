import "./Home.css";
import foto from "../../assets/images/foto francisco orozco liviana.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="left">
          <p className="eyebrow">Full stack developer · marketing background</p>
          <h1>
            Hi, I&apos;m Francisco, building software that behaves like a system
            instead of a template.
          </h1>
          <h2>
            I&apos;m a{" "}
            <span className="type-highlight">
              <Typewriter
                words={[
                  " Marketing Specialist.",
                  " Developer.",
                  " Systems thinker.",
                  " Builder.",
                ]}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="section-copy hero-copy">
            I&apos;m a full stack web developer with a background in marketing and
            sales, which lets me design tools that are useful, legible, and
            grounded in business reality. I currently lead IT development at
            Atenas Grupo Consultor, coordinating cross-functional work and
            building with TypeScript, React, Python, Flask, SQL, Figma,
            WordPress, and Elementor.
          </p>

          <div className="hero-actions">
            <div className="stack">
              <h4>Find me in</h4>
              <div className="button">
                <a href="https://github.com/frako23">
                  <button className="btn_brands" aria-label="GitHub profile">
                    <i className="fab fa-github"></i>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/franciscorozco/?locale=en_US">
                  <button className="btn_brands" aria-label="LinkedIn profile">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </a>
                <a href="https://www.instagram.com/frakodev/">
                  <button className="btn_brands" aria-label="Instagram profile">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className="stack">
              <h4>Core stack</h4>
              <div className="skill-pills" aria-label="Core skills">
                <span>TypeScript</span>
                <span>React</span>
                <span>Python</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right_img surface card-lift">
            <img src={foto} alt="Foto de Francisco Orozco" />
          </div>

          <div className="hero-aside surface">
            <span>Currently leading IT development</span>
            <strong>Bridging growth, product, and engineering.</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
