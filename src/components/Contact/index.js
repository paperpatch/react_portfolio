import React, { useState } from "react";

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`)
        } else {
          setErrorMessage('');
        }
      }
    }
    setFormState({...formState, [e.target.name]: e.target.value })

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section id="contact" className="fade-in">
      <div className="contacts">
        <h1 data-testid="h1tag" className="title">Get in Touch</h1>
        <p>I am looking for new opportunities to grow. My inbox is open.</p>
        <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
    );
}

export default ContactForm