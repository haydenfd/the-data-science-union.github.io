import React from 'react'
import './index.css'

const MemberCard = (props) => { 
  return (
    <div className="member-card-container">
      <img className="member-pic" src={props.src} alt={props.name}/>
      <p className="member-name">
        {props.name}
      </p>
      <p className="member-pos">
        {props.pos}
      </p>
    </div>
  )
} 

export default MemberCard;