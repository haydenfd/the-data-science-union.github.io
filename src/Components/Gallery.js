import React from 'react';
import { logos } from '../Pages/global';

const Gallery = () => { 
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