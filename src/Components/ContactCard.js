import React, { useState } from 'react';
import './index.css';
import Emily from './Images/Members/emily-gong.jpeg';
const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      message: message,
    })
  }

  return (
  <section className="contact-container">
    <h1 className="contact-title">
      Get In Touch
    </h1> 
      <form
        className="contact-card-container"
        onSubmit={handleSubmit}
      >
      <div className="contact-card-profile">
          <img
            src={Emily}
            className="contact-card-profile-pic"
            alt=""
          />
        <h2 className="contact-card-profile-name">
          Emily Gong
        </h2>
        <h3 className="contact-card-profile-pos">
          Director Of Professional Outreach
        </h3>
        </div>
        <div className="contact-card-input-container">
          <input
            placeholder="Name"
            className="contact-card-input styled-input"
            onChange={handleNameChange}
            required
          />
          <input
            placeholder="Email"
            onChange={handleEmailChange}
            className="contact-card-input styled-input"
            required
          />
          <textarea
            placeholder="Please enter your message here"
            className="contact-card-input long styled-input"
            onChange={handleMessageChange}
            required
          />
        </div>
        <div className="contact-card-btn-container">
          <button
            className="contact-card-btn"
          > Submit
          </button>
        </div>
    </form> 
  </section>
  )
}

export default ContactCard;