import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import Swal from 'sweetalert2'

const Contact = () => {
  const [state, handleSubmit] = useForm("myyqokwq");

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Thanks for getting in touch with me!! 🙌",
      text: "I´ll answer ASAP!",
      confirmButtonColor: "#35AD94",
      footer: "Sincerely: frakoDev <span>&#128526</span> ",
    });
    document.getElementById("contact-form").reset();
  }


  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-end">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="details">
                  <h1>Francisco Orozco</h1>
                  <p>Software Developer</p>
                  <p>
                    I am available for freelance work. Connect with me via email
                    or thru call.
                  </p>{" "}
                  <br />
                  <p>Phone: +58 04242526757</p>
                  <p>Email: frako23@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a href="mailto:frako23@gmail.com">
                      <button className="btn_shadow">
                        <i className="fa-solid fa-envelope"></i>
                      </button>
                    </a>
                    <a href="https://wa.me/584242526757">
                      <button className="btn_shadow">
                        <i className="fa-brands fa-whatsapp"></i>
                      </button>
                    </a>
                    <a href="tg://resolve?domain=Frako23">
                      <button className="btn_shadow">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>YOUR NAME</span>
                  <input name="name" id="name" type="text" className="input" />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>EMAIL </span>
                  <input type="email" name="email" id="email" className="input" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <span style={{fontWeight: 'bold'}}>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    id="message"
                    className="input"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button className="btn_shadow" type="submit">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
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
