// import contactImg from "../../assets/images/contact.png"; // Asegúrate de que la ruta sea correcta
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="Contact section" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content contact-grid">
            {/* PARTE IZQUIERDA: INFO */}
            <div className="left contact-intro surface">
              <div>
                <div className="img">
                  {/* <img src={contactImg} alt="Contact Me" /> */}
                </div>
                <div className="details">
                  <span>IN TOUCH</span>
                  <h1>Francisco Orozco</h1>
                  <p>IT Development Lead & Full Stack Developer</p>
                  <p>
                    I am available for freelance projects or full-time
                    opportunities. Connect with me via and let&apos;s talk.
                  </p>
                  <br />
                  <p>
                    Email:{" "}
                    <a href="mailto:frakodev.code@gmail.com">
                      frakodev.code@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* PARTE DERECHA: FORMULARIO */}
            <div className="right contact-form surface">
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="input-group">
                  <div className="input field">
                    <span>YOUR NAME</span>
                    <input type="text" name="fullname" required />
                  </div>
                  <div className="input field">
                    <span>PHONE NUMBER</span>
                    <input type="text" name="phone" />
                  </div>
                </div>

                <div className="input field">
                  <span>EMAIL</span>
                  <input type="email" name="email" required />
                </div>

                <div className="input field">
                  <span>SUBJECT</span>
                  <input type="text" name="subject" />
                </div>

                <div className="input field message-field">
                  <span>YOUR MESSAGE</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
