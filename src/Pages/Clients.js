import React from 'react';
import './index.css';
import ContactCard from '../Components/ContactCard';
import { testimonials } from './global';

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
