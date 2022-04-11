import React, { useState,useRef } from 'react';
import './index.css';
import Chevron from './Chevron';

const Accordion = (props) => { 

  const [isActive, setIsActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() { 
    setIsActive(isActive === ""? "active" : "");
    setHeight(isActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(isActive === "active"? "accordion__icon" : "accordion__icon rotate")
  }

  return (
    <div className="accordion-section">
      <button className={`accordion ${isActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">
          {props.question}
        </p>
        <Chevron className={`${rotate}`} width={15} fill={"#344F99"}/>
      </button>
      <div ref={content} style={{maxHeight: `${height}`}}className="accordion-content">
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.answer}}
        />
      </div>
    </div>
  )
}

export default Accordion;