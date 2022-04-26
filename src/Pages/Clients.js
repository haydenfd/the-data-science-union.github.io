import React from 'react';
import './index.css';
import ContactCard from '../Components/ContactCard';

const testimonials = [
  {
    company: "Imagine LA",
    message: "A big piece of our program is matching families to volunteer mentors, and in 2020 we were faced with a great problem: too many mentors! The UCLA Data Science Union helped us crack open this challenge by developing an algorithm-based web app to help us identify the best-fit matches for our family members. From start to finish, the DSU team was professional, thoughtful, and collaborative, and as a result, our matches have been more data-driven and easier to identify. Thank you DSU!",
  },
];

const Clients = () => { 

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
      <ContactCard/>
    </div>
  )
}

export default Clients;
