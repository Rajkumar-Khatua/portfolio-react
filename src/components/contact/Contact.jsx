import { useContext, useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { ThemedContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemedContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4cl1r5j",
        "template_1aby9la",
        formRef.current,
        "JxtMsUtCww_rarPRI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <div className="__contact__title">
            <h3>Let's Discuss Your Project</h3>
          </div>
          <div className="contact__info">
            <div className="contact__info__item">
              <img src="/mail.png" alt="" className="icon" />
              <span>rajkhatua2020@gmail.com</span>
            </div>
            <div className="contact__info__item">
              <img src="/map.png" alt="" className="icon" />
              <span>India, Kolkata</span>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <p className="contact__desc">
            If you have any questions or want to work together, please fill out
            the form below.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} style={{ backgroundColor: darkMode && "#333" }}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={handleChange}
              required={true}
            />

            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              name="message"
              onChange={handleChange}
              rows={5}
              required={true}
            />
            {done && (
              <span className="thank-you-message">
                Thank you... I will contact you soon as possible 😊
              </span>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
