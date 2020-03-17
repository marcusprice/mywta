import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
  return(
      <nav>
        <ul className="menu">
          <MenuItem
            icon="search"
            setView={props.setView}
            contentWindowExpanded={props.contentWindowExpanded}
            setContentWindowExpanded={props.setContentWindowExpanded}
            view={props.view}
          />

          <MenuItem
            icon="hike-info"
            setView={props.setView}
            contentWindowExpanded={props.contentWindowExpanded}
            setContentWindowExpanded={props.setContentWindowExpanded}
            view={props.view}
          />

          <MenuItem
            icon="location"
            contentWindowExpanded={props.contentWindowExpanded}
            setContentWindowExpanded={props.setContentWindowExpanded}
            view={props.view}
          />

          <MenuItem
            icon="map"
            contentWindowExpanded={props.contentWindowExpanded}
            setContentWindowExpanded={props.setContentWindowExpanded}
            view={props.view}
          />

          <MenuItem
            icon="about"
            setView={props.setView}
            contentWindowExpanded={props.contentWindowExpanded}
            setContentWindowExpanded={props.setContentWindowExpanded}
            view={props.view}
          />
        </ul>
      </nav>
  )
}

export default Menu;
