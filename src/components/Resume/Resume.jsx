import Card from "./Card";
import "./Resume.css";
import ResumeApi from "./ResumeApi";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>3+ YEARS OF EXPERIENCE IN CODING</h4>
            <h1>My Resume</h1>
            <a href="/CV-Francisco.pdf" download className="btn_download">
              Download CV <i className="fa-solid fa-file-arrow-down"></i>
            </a>
          </div>

          {/* Contenedor principal con clase para controlar el ancho */}
          <div className="resume-wrapper mtop">
            {/* SECCIÓN DE EXPERIENCIA (Ahora primero) */}
            <div className="resume-section">
              <div className="heading">
                <h4>2009 - Present</h4>
                <h1>Job Experience</h1>
              </div>
              <div className="content">
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* SECCIÓN DE EDUCACIÓN (Ahora abajo) */}
            <div className="resume-section">
              <div className="heading">
                <h4>2003 - Present</h4>
                <h1>Education</h1>
              </div>
              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
