import React from 'react';

const ContentWindow = (props) => {
  let height = 0;
  if(props.contentWindowExpanded) {
    height = props.windowDimensions.height - 100;
  } else {
    height = 0;
  }

  return(
    <div className="content-window" style={{height: height}}/>
  )
}

export default ContentWindow;
