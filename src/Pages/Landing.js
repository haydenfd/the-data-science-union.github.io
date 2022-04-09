import React, { Component } from 'react'
import './index.css'


export default class Landing extends Component {

  render() { 
    return (
      <div>
      <div className="who-we-are py-6">
        <h1 className="title">
        Who We Are
        </h1>
        <p style={{ textAlign: 'center', width: '60%', top: '40%', left: '50%' }}>
          The <p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>Data Science Union</p> is a student organization founded in March of 2019. Our goal is to cultivate a thriving community of data science professionals at UCLA. The three components of our club: our self-designed curriculum, real-world projects, and professional development opportunities, prepare our club members for careers in data science. 
        </p>
        </div>
        <div className="stats-container">
          <div className="stats-child">
            <p style={{
              color: '#F3A47D', fontSize: '48px', fontWeight: '800',textAlign: 'center' }}>60+</p><br />
            <p style={{ color: '#3A3B3C', fontSize: '30px',width:'50%',textAlign: 'center', padding:'2%' }}>active members</p>
          </div>
          <div className="stats-child">
            <p style={{ color: '#F3A47D', fontSize: '48px', fontWeight: '800' }}>10+</p><br />
            <p style={{ color: '#3A3B3C', fontSize: '30px', width: '50%' }}>internal projects</p>
          </div>
          <div className="stats-child">
            <p style={{ color: '#F3A47D', fontSize: '48px', fontWeight: '800' }}>5+</p><br />
            <p style={{ color: '#3A3B3C', fontSize: '30px', width: '50%' }}>client projects</p>
          </div>
          <div className="stats-child">
            <p style={{ color: '#F3A47D', fontSize: '48px', fontWeight: '800' }}>15+</p><br />
            <p style={{ color: '#3A3B3C', fontSize: '30px', width: '50%' }}>clients represented</p>
          </div>
        </div>
       
        <div className="who-we-are py-6">
          <h1 className="title">
            For Clients
          </h1>
          <p style={{ textAlign: 'center', width: '60%', top: '40%', left: '50%' }}>
            At DSU, our most experienced members work < p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>pro bono</p> to provide you with < p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>data-driven consulting services</p>. We produce a thorough analysis of your data, so you can better your services with< p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}> well-rounded insights.</p>
          </p>
        </div>
      </div>
    )
  }
}


// At DSU, our most experienced members work pro bono to provide you with the data - driven consulting services.We produce a thorough analysis of your data, so you can better your services with well - rounded insights.

// < p style = {{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>