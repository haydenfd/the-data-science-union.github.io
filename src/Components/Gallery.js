import React from 'react';
import Accenture from './Logos/company-logos/accenture.png';
import Aktana from './Logos/company-logos/aktana.jpg';
import Amazon from './Logos/company-logos/amazon.png';
import BP from './Logos/company-logos/bp.png';
import Deloitte from './Logos/company-logos/deloitte.jpg';
import DRW from './Logos/company-logos/drw.png';
import InternetBrands from './Logos/company-logos/internet-brands.png';
import KPMG from '../Components/Logos/company-logos/kpmg.png';
import Mckinsey from '../Components/Logos/company-logos/mckinsey.png';
import Meta from './Logos/company-logos/meta.png';
import Microsoft from './Logos/company-logos/microsoft.png';
import MorganStanley from './Logos/company-logos/morgan-stanley.png';
import PacificLife from './Logos/company-logos/pacific-life.jpeg';
import Uber from './Logos/company-logos/uber.jpg';
import UCLAPsychology from './Logos/company-logos/ucla-psychology.png';
import Visa from './Logos/company-logos/visa.png';
import ZS from './Logos/company-logos/zs.jpeg';


const Gallery = () => { 
  let logos = [
    {
      id: 1,
      img: Accenture,
      company: 'Accenture',
    },
    {
      id: 2,
      img: Aktana,
      company: 'Aktana',
    },
    {
      id: 3,
      img: Amazon,
      company: 'Amazon',
    },
    {
      id: 4,
      img: BP,
      company: 'BP',
    },
    {
      id: 5,
      img: Deloitte,
      company: 'Deloitte',
    },
    {
      id: 6,
      img: DRW,
      company: 'DRW',
    },
    {
      id: 7,
      img: InternetBrands,
      company: 'Internet Brands',
    },
    {
      id: 8,
      img: KPMG,
      company: 'KPMG',
    },
    {
      id: 9,
      img: Mckinsey,
      company: 'Mckinsey',
    },
    {
      id: 10,
      img: Meta,
      company: 'Meta',
    },
    {
      id: 11,
      img: Microsoft,
      company: 'Microsoft',
    },
    {
      id: 12,
      img: MorganStanley,
      company: 'Morgan Stanley',
    },
    {
      id: 13,
      img: PacificLife,
      company: 'Pacific Life',
    },
    {
      id: 14,
      img: Uber,
      company: 'Uber',
    },
    {
      id: 15,
      img: UCLAPsychology,
      company: 'UCLA Psychology',
    },
    {
      id: 16,
      img: Visa,
      company: 'Visa',
    },
    {
      id: 17,
      img: ZS,
      company: 'ZS',
    },
  ]

  return (
    <>
      <section className="photos">
        {logos.map((item, index) => { 
          return (
            <div className="photo-container" key={index}>
              <img
                src={item.img}
                alt={item.company}
                />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Gallery;