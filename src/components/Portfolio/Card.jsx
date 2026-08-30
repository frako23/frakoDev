/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IconSwitch } from "../../logic/iconSwitch";

const Card = ({
  title,
  image,
  description,
  category,
  technologies,
  proyectUrl,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal((current) => !current);

  useEffect(() => {
    document.body.classList.toggle("active-modal", modal);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setModal(false);
    };
    if (modal) window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

  return (
    <>
      <article className="box portfolio-card card-lift">
        <button type="button" className="img" onClick={toggleModal} aria-label={`Open details for ${title}`}>
          <img src={image} alt={`${title} project preview`} />
        </button>
        <div className="category">
          <span>{category}</span>
          {/* <label>
            <i className='far fa-heart'></i> {totalLike}
          </label> */}
        </div>
        <div className="title">
          <h2>{title}</h2>
          <button type="button" className="arrow" onClick={toggleModal} aria-label={`View details for ${title}`}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <button type="button" className="portfolio-link" onClick={toggleModal}>View case study <i className="fas fa-arrow-right" /></button>
      </article>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby={`modal-title-${title}`}>
            <div className="modal-img">
              <img src={image} alt={`${title} project preview`} />
            </div>
            <div className="modal-text">
              <span className="modal-kicker">{category}</span>
              <h1 id={`modal-title-${title}`}>{title}</h1>
              <div className="modal-description">
                <ul>
                  {description.map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
                </ul>
              </div>

              <div className="modal-footer">
                {/* <button className="btn_shadow">
                  LIKE THIS <i className="far fa-thumbs-up"></i>
                </button> */}
                <a
                  className="btn_shadow"
                  target="_blank"
                  href={proyectUrl}
                  rel="noreferrer"
                >
                  VIEW PROJECT<i className="fas fa-chevron-right"></i>
                </a>{" "}
                <div className="tech-container" aria-label="Technologies used">
                  {technologies.map((tech, index) => (
                    <div key={index} className="tech-icon-wrapper" title={tech}>
                      {IconSwitch(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" className="close-modal" onClick={toggleModal} aria-label="Close project details">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
