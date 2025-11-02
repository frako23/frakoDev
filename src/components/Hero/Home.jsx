import "./Home.css";
// import hero from "../../assets/images/foto.png"
import avif from "../../assets/images/fotoAvif.avif";
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            {/* <h3>WELCOME TO MY WORLD</h3> */}
            <h1 style={{ color: "white" }}>
              Hi, I’m <span>Francisco</span>,
            </h1>
            <h2>
              I’m a
              <span>
                <Typewriter
                  words={[
                    " Marketing Specialist.",
                    " Developer.",
                    " Geek.",
                    " Coding passionate.",
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I’m a full stack web developer with a strong background in
              marketing and sales, which allows me to build user-centric,
              business-driven tech solutions. Currently, I lead IT development
              at Atenas Grupo Consultor, coordinating cross-functional teams and
              driving the adoption of emerging technologies. I work with tools
              like TypeScript, React, Python, Flask, SQL, Figma, WordPress, and
              Elementor to build scalable, responsive, and high-impact
              applications. I’m passionate about continuous improvement, process
              automation, and lifelong learning, and I thrive in dynamic
              environments that foster innovation.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND ME IN</h4>
                <div className="button">
                  <a href="https://github.com/frako23">
                    <button className="btn_brands">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/franciscorozco/?locale=en_US">
                    <button className="btn_brands">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a href="https://x.com/frakoDev">
                    <button className="btn_brands">
                      <i className="fa-brands fa-x-twitter"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILLS ON</h4>
                <button className="btn_brands">
                  <i className="fa-brands fa-square-js"></i>
                </button>
                <button className="btn_brands">
                  <i className="fa-brands fa-react"></i>
                </button>
                <button className="btn_brands">
                  <i className="fa-brands fa-python"></i>
                </button>
                <button className="btn_brands">
                  <i className="fa-brands fa-git-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={avif} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
