import React from 'react';
import search from '../assets/icons/search.svg';
import hikeInfo from '../assets/icons/hike-info.svg';
import location from '../assets/icons/location.svg';
import map from '../assets/icons/map.svg';
import about from '../assets/icons/about.svg';

const MenuItem = (props) => {
  let icon, alt;
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

  return(
    <li className="menu-item">
      <img className="menu-item-icon" src={icon} alt=""/>
    </li>
  )
}

export default MenuItem;
