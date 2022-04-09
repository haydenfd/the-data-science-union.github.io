import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import './index.css'
import Accenture from '../Components/Logos/company-logos/accenture.png';
import Aktana from '../Components/Logos/company-logos/aktana.jpg';
import Amazon from '../Components/Logos/company-logos/amazon.png';
import BP from '../Components/Logos/company-logos/bp.png';
import Deloitte from '../Components/Logos/company-logos/deloitte.jpg';
import DRW from '../Components/Logos/company-logos/drw.png';
import InternetBrands from '../Components/Logos/company-logos/internet-brands.png';
import KPMG from '../Components/Logos/company-logos/kpmg.png';
import Mckinsey from '../Components/Logos/company-logos/mckinsey.png';
import Meta from '../Components/Logos/company-logos/meta.png';
import Microsoft from '../Components/Logos/company-logos/microsoft.png';
import MorganStanley from '../Components/Logos/company-logos/morgan-stanley.png';
import PacificLife from '../Components/Logos/company-logos/pacific-life.jpeg';
import Uber from '../Components/Logos/company-logos/uber.jpg';
import UCLAPsychology from '../Components/Logos/company-logos/ucla-psychology.png';
import Visa from '../Components/Logos/company-logos/visa.png';
import ZS from '../Components/Logos/company-logos/zs.jpeg';

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

        <div className="projects-slider">
          <h1>
            Projects
          </h1>
        </div>
       
        <div className="who-we-are py-6">
          <h1 className="title">
            For Clients
          </h1>
          <p style={{ textAlign: 'center', width: '60%', top: '40%', left: '50%' }}>
            At DSU, our most experienced members work < p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>pro bono</p> to provide you with < p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>data-driven consulting services</p>. We produce a thorough analysis of your data, so you can better your services with< p style={{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}> well-rounded insights.</p>
          </p>

          <button className="partner-with-us-btn" onClick={() => alert("Thanks for submission")}>Want to partner with us?</button>
        </div>

        <div className="where-we-work py-5">
          <h1 className="title">
            Where We Work
          </h1>
          <img
            src={Accenture}
            className="company-logo"
            alt="Accenture"
          />
          <img
            src={Aktana}
            className="company-logo"
            alt="Aktana"
          />
          <img
            src={Amazon}
            className="company-logo"
            alt="Amazon"
          />
          <img
            src={BP}
            className="company-logo"
            alt="BP"
          />
          <img
            src={Deloitte}
            className="company-logo"
            alt="Deloitte"
          />
          <img
            src={DRW}
            className="company-logo"
            alt="DRW"
          />
          <img
            src={InternetBrands}
            className="company-logo"
            alt="Internet-Brands"
          />
          <img
            src={KPMG}
            className="company-logo"
            alt="KPMG"
          />
          <img src={Mckinsey} className="company-logo"/>
          <img src={Meta} className="company-logo"/>
          <img src={Microsoft} className="company-logo"/>
          <img src={MorganStanley} className="company-logo"/>
          <img src={PacificLife} className="company-logo" />
          <img src={Uber} className="company-logo"/>
          <img src={UCLAPsychology} className="company-logo"/>
          <img src={Visa} className="company-logo"/>
          <img src={ZS} className="company-logo"/>
          
        </div>

      </div>
    )
  }
}


// At DSU, our most experienced members work pro bono to provide you with the data - driven consulting services.We produce a thorough analysis of your data, so you can better your services with well - rounded insights.

// < p style = {{ color: '#F3A47D', display: 'inline', textAlign: 'justify' }}>