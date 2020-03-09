import React from 'react';
import info from '../assets/icons/info.svg';

const HikeBar = () => {
  return(
    <div className="hike-bar">
      <span className="hike-bar-title">mywta</span>
      <img className="info-icon" src={info} alt="info icon"/>
    </div>
  )
}

export default HikeBar;
