import React, { useEffect } from 'react';
import Img from 'react-image';
import About from './About';
import Search from './Search';
import HikeDetails from './HikeDetails';
import trees from '../assets/img/trees.jpg';
import search from '../assets/img/search.jpg';
import oysterDome from '../assets/img/oyster-dome.jpeg';

const ContentWindow = (props) => {
  useEffect(() => {
    document.querySelector('.content-window').scrollTop = 0;
  })

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
    case 'hike-info':
      view = <HikeDetails />;
      image = oysterDome;
      alt = "Trail Image";
      break;
    default:
      view = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
  }

  return(
    <div className={"content-window " + (props.contentWindowExpanded ? 'expanded' : '')}>
      <div>
      <Img className="content-image" src={image} alt={alt} loader={<div className="content-image"/>}/>
      { view }
      </div>
    </div>
  )
}

export default ContentWindow;
