import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.name.value === "") {
      window.alert("Please enter your name.");
    } else {
      if (e.target.email.value === "") {
        window.alert("Please enter a valid email address.");
      } else {
        if (e.target.message.value === "") {
          window.alert("Please enter a message.");
        } else {
          emailjs
            .sendForm(
              "service_f50rrtm",
              "template_kuvehin",
              form.current,
              "user_9aDjMu6kWGitfhmc8vUIi"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );

          // reset form values
          setFormState({
            name: "",
            email: "",
            message: "",
          });

          // reset values
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";

          window.alert("Email Sent! Thank you.");
        }
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact">
      <div className="contacts">
        <h1 data-testid="h1tag" className="title">
          Get in Touch
        </h1>
        <p>I am looking for new opportunities to grow. My inbox is open.</p>
        <p>
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <p>
          You can contact me by email me at{" "}
          <a href="mailto: patchen21@gmail.com" target="_blank">
            patchen21@gmail.com
          </a>
        </p>

        {/* Contact form no longer works. Replace or Remove. */}
        {/* <form className="form" ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className="form-input"
              placeholder="Your Name"
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Your Email"
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <div>
            <textarea
              className="form-input"
              placeholder="Your Message"
              name="message"
              defaultValue={message}
              rows="6"
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div>
            <button className="form-button" data-testid="button" type="submit">
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}

export default ContactForm;
