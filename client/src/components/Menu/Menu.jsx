import React from 'react';
import MenuItem from '../MenuItem/';
import './menu.css';

const Menu = props => {

  //props
  const{
    contentWindowExpanded,      //whether content window is expanded or not
    setContentWindowExpanded,   //sets content window expanded state
    setView,                    //sets the content window view
    view                        //the current content window view
  } = props;

  return (
    <nav>
      <ul className="menu">
        <MenuItem
          item="search"
          setView={setView}
          contentWindowExpanded={contentWindowExpanded}
          setContentWindowExpanded={setContentWindowExpanded}
          view={view} />

        <MenuItem
          item="hike-info"
          setView={setView}
          contentWindowExpanded={contentWindowExpanded}
          setContentWindowExpanded={setContentWindowExpanded}
          view={view} />

        <MenuItem
          item="location"
          contentWindowExpanded={contentWindowExpanded}
          setContentWindowExpanded={setContentWindowExpanded}
          view={view} />

        <MenuItem
          item="map"
          contentWindowExpanded={contentWindowExpanded}
          setContentWindowExpanded={setContentWindowExpanded}
          view={view} />

        <MenuItem
          item="about"
          setView={setView}
          contentWindowExpanded={contentWindowExpanded}
          setContentWindowExpanded={setContentWindowExpanded}
          view={view} />
      </ul>
    </nav>
  );
}

export default Menu;
