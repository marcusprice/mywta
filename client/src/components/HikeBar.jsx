import React from 'react';
import info from '../assets/icons/info.svg';

const HikeBar = (props) => {
  let title;
  if(!props.selectedHike || window.innerWidth > 769) {
    title = 'mywta';
  } else {
    title = props.selectedHike.name;
  }

  const handleClick = () => {

    if(props.selectedHike) {
      props.setView('hike-info');
    } else {
      props.setView('about');
    }

    props.setContentWindowExpanded(true);
  }

  return(
    <div className="hike-bar">
      <span className="hike-bar-title">{title}</span>
      <img onClick={handleClick} className="info-icon" src={info} alt="info icon"/>
    </div>
  )
}

export default HikeBar;
