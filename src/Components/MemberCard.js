import React from 'react'
import './index.css'

const MemberCard = (props) => { 
  return (
    <div className="member-card-container">
      <img className="member-pic" src={props.img} alt={props.name}/>
      <p className="member-name">
        {props.name}
      </p>
      <p className="member-pos">
        {props.pos}
        {
          props.pos.length === 0? <p style={{ display: 'inline', color: 'black'}}></p> : <p style={{ display: 'inline', color: 'black' }}>, </p>
        }
        Class of <p style={{ display: 'inline', fontStyle: 'italic', color: 'black'}}>{props.year}</p>
      </p>
    </div>
  )
} 

export default MemberCard;