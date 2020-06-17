import React from 'react';
import info from '../../assets/icons/info.svg';
import './hikeBar.css';

const HikeBar = ({
  selectedHike,               //the selected hike
  setContentWindowExpanded,   //set content window expanded
  setView                     //to set the view
}) => {
  
  let title;
  if(!selectedHike || window.innerWidth > 769) {
    title = 'mywta';
  } else {
    title = selectedHike.name;
  }

  const handleClick = () => {

    if(selectedHike) {
      setView('hike-info');
    } else {
      setView('about');
    }

    setContentWindowExpanded(true);
  }

  return(
    <div className="hike-bar">
      <span className="hike-bar-title">{title}</span>
      <img onClick={handleClick} className="info-icon" src={info} alt="info icon"/>
    </div>
  )
}

export default HikeBar;
