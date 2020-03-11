import React from 'react';
import About from './About';
import trees from '../assets/img/trees.jpg';

const ContentWindow = (props) => {
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
      <img className="content-image" src={trees} alt="PNW trees" />
      <About />
    </div>
  )
}

export default ContentWindow;
