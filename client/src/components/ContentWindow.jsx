import React from 'react';

const ContentWindow = (props) => {
  let height = 0;
  let left = 0;
  if(props.contentWindowExpanded) {
    if(props.windowDimensions.width > 499) {  //we are in desktop mode
      height = "75%";
      left = 12;
    } else {  //mobile mode
      height = props.windowDimensions.height - 100;
      left = 0;
    }
  } else {

    if(props.windowDimensions.width > 499) {  //we are in dekstop mode
      height = "75%"
      left = "-40%";
    }

  }

  return(
    <div className="content-window" style={{height: height, left: left}}/>
  )
}

export default ContentWindow;
