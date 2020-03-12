import React from 'react';
import search from '../assets/icons/search.svg';
import hikeInfo from '../assets/icons/hike-info.svg';
import location from '../assets/icons/location.svg';
import map from '../assets/icons/map.svg';
import about from '../assets/icons/about.svg';

const MenuItem = (props) => {
  let icon, alt;
  let className = '';
  switch(props.icon) {
    case 'search':
      icon = search;
      alt = 'search icon';
      break;
    case 'hike-info':
      icon = hikeInfo;
      alt = 'hike info';
      break;
    case 'location':
      icon = location;
      alt = 'location pin icon';
      className = 'location';
      break;
    case 'map':
      icon = map;
      alt = 'map icon';
      break;
    case 'about':
      icon = about;
      alt = 'bear head';
      break;
    default:
      icon = search;
      alt = 'search icon';
      break;
  }

  const handleClick = () => {
    if(props.icon === 'search' || props.icon === 'hike-info' || props.icon === 'about') {
      if(props.icon === 'search') {  props.setView('search') }
      if(props.icon === 'hike-info') {  props.setView('hike-info') }
      if(props.icon === 'about') {  props.setView('about') }
      props.setContentWindowExpanded(true);
    } else {
      props.setContentWindowExpanded(false);
    }
  }

  return(
    <li onClick={handleClick} className="menu-item">
      <img className={'menu-item-icon ' + className} src={icon} alt={alt} />
    </li>
  )
}

export default MenuItem;
