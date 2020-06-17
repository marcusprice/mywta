import React from 'react';
import search from '../../assets/icons/search.svg';
import hikeInfo from '../../assets/icons/hike-info.svg';
import location from '../../assets/icons/location.svg';
import map from '../../assets/icons/map.svg';
import about from '../../assets/icons/about.svg';

const MenuItem = ({
  item,                       //the menu item
  setView,                    //function to set view
  contentWindowExpanded,      //if the content window is expanded
  setContentWindowExpanded,   //function to open and close content window
  view                        //the current view
}) => {

  //items to be add img tag
  let icon, alt;
  let className = '';

  switch(item) {
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
      className = 'location'; //location class added for map event listener
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
    if(item === 'search' || item === 'hike-info' || item === 'about') {
      if(item === 'search') {  setView('search') }
      if(item === 'hike-info') {  setView('hike-info') }
      if(item === 'about') {  setView('about') }

      if(view === item && contentWindowExpanded) {
        setContentWindowExpanded(false);
      } else {
        setContentWindowExpanded(true);
      }
    } else {
      if(item === 'location' && window.innerWidth > 769 && contentWindowExpanded) {
        setContentWindowExpanded(true);
      } else {
        setContentWindowExpanded(false);
      }
    }
  }

  return(
    <li onClick={handleClick} className="menu-item">
      <img className={'menu-item-icon ' + className} src={icon} alt={alt} />
    </li>
  )
}

export default MenuItem;
