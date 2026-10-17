import Card from "./Card";
import "./Resume.css";
import ResumeApi from "./ResumeApi";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>4+ YEARS OF EXPERIENCE IN CODING</h4>
            <h1>My Resume</h1>
            <a href="/CV-Francisco.pdf" download className="btn_download">
              Download CV <i className="fa-solid fa-file-arrow-down"></i>
            </a>
          </div>

          {/* Contenedor principal con clase para controlar el ancho */}
          <div className="resume-wrapper mtop">
            {/* SECCIÓN DE EXPERIENCIA COMO DEVELOPER */}
            <div className="resume-section dev">
              <div className="heading">
                <h4>2022 - Present</h4>
                <h1>Developer Experience</h1>
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

            {/* SECCIÓN DE CARRERA PREVIA (marketing y ventas) */}
            <div className="resume-section previous">
              <div className="heading">
                <h4>2009 - 2022</h4>
                <h1>Before Code: Marketing &amp; Sales</h1>
                <p>
                  13 years in marketing, key accounts and sales gave me a
                  client-first mindset, communication skills and a focus on
                  measurable results that I now bring into every product I
                  build.
                </p>
              </div>
              <div className="content">
                {ResumeApi.map((val) => {
                  if (val.category === "background") {
                    return (
                      <Card
                        key={val.id}
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

            {/* SECCIÓN DE EDUCACIÓN */}
            <div className="resume-section education">
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

            {/* SECCIÓN DE CERTIFICACIONES (ancho completo) */}
            <div className="resume-section certifications">
              <div className="heading">
                <h4>2026</h4>
                <h1>AI Certifications</h1>
              </div>
              <div className="content">
                {ResumeApi.map((val) => {
                  if (val.category === "certification") {
                    return (
                      <Card
                        key={val.id}
                        title={val.title}
                        year={val.year}
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
