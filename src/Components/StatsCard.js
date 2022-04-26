import React from 'react';
import './index.css'

const StatsCard = (props) => { 
  return (
    <div className="stats-card-container">
      <h1 className="stats-card-figure">
        { props.figure }
      </h1>
      <h2 className="stats-card-text">
        { props.text }
      </h2>
    </div>
  )

} 

export default StatsCard;