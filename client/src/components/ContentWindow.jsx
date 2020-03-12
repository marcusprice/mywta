import React from 'react';
import About from './About';
import Search from './Search';
import trees from '../assets/img/trees.jpg';
import search from '../assets/img/search.jpg';

const ContentWindow = (props) => {
  let image, alt, view;
  switch(props.view) {
    case 'about':
      view = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
    case 'search':
      view = <Search />;
      image = search;
      alt = "Person Hiking";
      break;
    default:
      view = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
  }

  let height = 0;
  let left = 0;
  if(props.contentWindowExpanded) {
    if(props.windowDimensions.width > 499) {  //we are in desktop mode
      height = props.windowDimensions.height - 238;
      left = 12;
    } else {  //mobile mode
      height = props.windowDimensions.height - 100;
      left = 0;
    }
  } else {

    if(props.windowDimensions.width > 499) {  //we are in dekstop mode
      height = "75%"
      left = "-660px";
    }
  }

  return(
    <div className="content-window" style={{height: height, left: left}}>
      <img className="content-image" src={image} alt={alt} />
      { view }
    </div>
  )
}

export default ContentWindow;
