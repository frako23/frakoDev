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
            <h1>
              Hi, I’m <span>Francisco</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Marketing Specialist.", " Developer.", " Geek.", " Passionate about coding."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME IN</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i className='fab fa-github'></i>
                  </button>
                  <button className='btn_shadow'>
                  <i className='fab fa-linkedin-in'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILLS ON</h4>
                <button className='btn_shadow'>
                <i className="fa-brands fa-square-js"></i>
                </button>
                <button className='btn_shadow'>
                <i className="fa-brands fa-react"></i>
                </button>
                <button className='btn_shadow'>
                <i className="fa-brands fa-python"></i>
                </button>
                <button className='btn_shadow'>
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