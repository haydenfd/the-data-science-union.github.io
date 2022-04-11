import React, { useState } from 'react';
import './index.css';

const testimonials = [
  {
    company: "Imagine LA",
    message: "A big piece of our program is matching families to volunteer mentors, and in 2020 we were faced with a great problem: too many mentors! The UCLA Data Science Union helped us crack open this challenge by developing an algorithm-based web app to help us identify the best-fit matches for our family members. From start to finish, the DSU team was professional, thoughtful, and collaborative, and as a result, our matches have been more data-driven and easier to identify. Thank you DSU!",
  },
];

const Clients = () => { 
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
    <div>
      <section className="working-with-dsu">
        <h1 className="working-with-dsu-title">
          Working With DSU
        </h1>
        <div className="working-with-dsu-content-container">
          <p className="working-with-dsu-content">
            DSU's client project teams consist of experienced members passionate about data science. With skills in modeling, exploratory data analysis, machine learning and more, our data scientists are committed to providing you with the best analysis and insights for your organization possible. 
          </p>
        </div>
      </section>

      <section className="statements-container">
        <p className="statement">You have the <p style={{color: '#89B8EF', display: 'inline'}}>data</p>.</p>
        <p className="statement">We have the <p style={{ color: '#F3A47D', display: 'inline' }}>insights</p>.</p>
      </section>

      <section className="contact-container">
        <h1 className="contact-title">
          Get In Touch
        </h1>
        <form className="contact-card-container">
          <input
            placeholder="Name"
            className="contact-card-input"
            onChange={handleNameChange}
            required
          />
          <input
            placeholder="Email"
            className="contact-card-input"
            onChange={handleEmailChange}
            required
          />
          <textarea
            placeholder="Please enter your message here"
            className="contact-card-input long"
            onChange={handleMessageChange}
          />
          <button
            className="contact-card-btn"
            onSubmit={ handleSubmit }
          > Submit
          </button>
          <div className="contact-card-profile">
            <div className="contact-card-profile-pic">
            </div>
            <h2 className="contact-card-profile-name">
              Emily Gong
            </h2>
            <h3 className="contact-card-profile-pos">
              Director Of Professional Outreach
            </h3>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Clients;
