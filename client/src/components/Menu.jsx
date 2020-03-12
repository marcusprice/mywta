import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
  return(
      <nav>
        <ul className="menu">
          <MenuItem icon="search" setView={props.setView} contentWindowExpanded={props.contentWindowExpanded} setContentWindowExpanded={props.setContentWindowExpanded} />
          <MenuItem icon="hike-info" setView={props.setView} contentWindowExpanded={props.contentWindowExpanded} setContentWindowExpanded={props.setContentWindowExpanded} />
          <MenuItem icon="location" contentWindowExpanded={props.contentWindowExpanded} setContentWindowExpanded={props.setContentWindowExpanded} />
          <MenuItem icon="map" contentWindowExpanded={props.contentWindowExpanded} setContentWindowExpanded={props.setContentWindowExpanded} />
          <MenuItem icon="about" setView={props.setView} contentWindowExpanded={props.contentWindowExpanded} setContentWindowExpanded={props.setContentWindowExpanded} />
        </ul>
      </nav>
  )
}

export default Menu;
