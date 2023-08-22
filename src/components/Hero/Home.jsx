import React from "react"
import "./Home.css"
import hero from "../../assets/images/foto.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            {/* <h3>WELCOME TO MY WORLD</h3> */}
            <h1 style={{color:"white"}}>
              Hi, I’m <span>Francisco</span>,
            </h1>
            <h2>
              I'm a
              <span>
                <Typewriter words={[" Marketing Specialist.", " Developer.", " Geek.", " Coding passionate."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am a full stack developer with more than 13 years of experience in marketing and sales who decided to make a 180 degree change in his professional life to pursue his passion for working in technology.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME IN</h4>
                <div className='button'>
                  <a href="https://github.com/frako23">
                  <button className='btn_brands'>
                    <i className='fab fa-github'></i>
                  </button>
                  </a>
                  <a href="https://www.linkedin.com/in/franciscorozco/?locale=en_US">
                  <button className='btn_brands'>
                  <i className='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                  <a href="https://twitter.com/frako23">
                  <button className='btn_brands'>
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILLS ON</h4>
                <button className='btn_brands'>
                <i className="fa-brands fa-square-js"></i>
                </button>
                <button className='btn_brands'>
                <i className="fa-brands fa-react"></i>
                </button>
                <button className='btn_brands'>
                <i className="fa-brands fa-python"></i>
                </button>
                <button className='btn_brands'>
                <i className="fa-brands fa-git-alt"></i>
                </button>

              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home