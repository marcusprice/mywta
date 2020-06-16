import React, { useEffect } from 'react';
import Img from 'react-image';
import About from './About';
import Search from './Search';
import HikeDetails from './HikeDetails';
import trees from '../assets/img/trees.jpg';
import search from '../assets/img/search.jpg';

const ContentWindow = ({
  view,                       //current view to display
  contentWindowExpanded,      //whether the content window is expanded or not
  setContentWindowExpanded,   //function to set the content window
  selectedHike,               //the selected hike
  parameters,                 //an object of search parameters
  setParameters,              //function to update the parameters
  locationEnabled,            //whether the user allowed location or not
  searchHikes                 //function called when a search is executed
}) => {

  useEffect(() => {
    document.querySelector('.content-window').scrollTop = 0;
  });

  let image, alt, display;

  switch(view) {
    case 'about':
      display = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
    case 'search':
      display = (
        <Search
          parameters={parameters}
          setParameters={setParameters}
          setContentWindowExpanded={setContentWindowExpanded}
          locationEnabled={locationEnabled}
          searchHikes={searchHikes}
        />
      );
      image = search;
      alt = "Person Hiking";
      break;
    case 'hike-info':
      if(!selectedHike) {
        display = (
          <Search
            parameters={parameters}
            setParameters={setParameters}
            setContentWindowExpanded={setContentWindowExpanded}
            locationEnabled={locationEnabled}
            searchHikes={searchHikes}
          />
        );
        image = search;
        alt = "Person Hiking";
      } else {
        display = <HikeDetails hike={selectedHike} />;
        if(selectedHike.imgurl === '') {
          image = trees;
        } else {
          image = selectedHike.imgurl;
        }
      }
      alt = "Trail Image";
      break;
    default:
      display = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
  }

  return(
    <div className={"content-window " + (contentWindowExpanded ? 'expanded' : '')}>
      <Img className="content-image" src={image} alt={alt} loader={<div className="content-image"/>}/>
      <div className="content-section">
        { display }
      </div>
    </div>
  )
}

export default ContentWindow;
