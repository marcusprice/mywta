import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return(

      <nav>
        <ul className="menu">
          <MenuItem icon="search"/>
          <MenuItem icon="hike-info"/>
          <MenuItem icon="location" />
          <MenuItem icon="map"/>
          <MenuItem icon="about"/>
        </ul>
      </nav>
  )
}

export default Menu;
