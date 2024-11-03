import React from "react";

function ContactForm() {
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
      </div>
    </section>
  );
}

export default ContactForm;
