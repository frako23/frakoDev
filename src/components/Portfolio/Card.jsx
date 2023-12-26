/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FlaskIcon } from "../../assets/icons/flask";
import { ReactIcon } from "../../assets/icons/react";
import { PythonIcon } from "../../assets/icons/python";
import { JavaScriptIcon } from "../../assets/icons/javascript";
import { PostgreSQLIcon } from "../../assets/icons/postgre";
import { IconSwitch } from "../../logic/iconSwitch";
import { CSSIcon } from "../../assets/icons/css";

const Card = ({
  title,
  image,
  description,
  category,
  technologies,
  proyectUrl,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{category}</span>
          {/* <label>
            <i className='far fa-heart'></i> {totalLike}
          </label> */}
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <div style={{ maxHeight: "220px", overflowY: "scroll" }}>
                <ul>
                  {description.map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
                </ul>
              </div>

              <div
                className="button f_flex mtop"
                style={{ justifyContent: "space-between" }}
              >
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
                <div style={{ width: "16rem" }}>
                  {/* <JavaScriptIcon />
                  <ReactIcon />
                  <FlaskIcon />
                  <PythonIcon />
                  <PostgreSQLIcon /> */}
                  {technologies.map((tech) => IconSwitch(tech))}
                </div>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
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
