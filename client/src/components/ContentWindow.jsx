import React from 'react';
import Img from 'react-image';
import About from './About';
import Search from './Search';
import HikeDetails from './HikeDetails';
import trees from '../assets/img/trees.jpg';
import search from '../assets/img/search.jpg';

const ContentWindow = (props) => {
  console.log('rendered');
  let image, alt, view;
  switch(props.view) {
    case 'about':
      view = <About />;
      image = trees;
      alt = "PNW Trees";
      break;
    case 'search':
      view = (
        <Search
          parameters={props.parameters}
          setParameters={props.setParameters}
          setHikes={props.setHikes}
          setContentWindowExpanded={props.setContentWindowExpanded}
          searchHikes={props.searchHikes}
          locationEnabled={props.locationEnabled}
        />
      );
      image = search;
      alt = "Person Hiking";
      break;
    case 'hike-info':
      if(!props.selectedHike) {
        view = (
          <Search
            parameters={props.parameters}
            setParameters={props.setParameters}
            setHikes={props.setHikes}
            setContentWindowExpanded={props.setContentWindowExpanded}
            searchHikes={props.searchHikes}
            locationEnabled={props.locationEnabled}
          />
        );
        image = search;
        alt = "Person Hiking";
      } else {
        view = <HikeDetails hike={props.selectedHike} />;
        if(props.selectedHike.imgurl === '') {
          image = trees;
        } else {
          image = props.selectedHike.imgurl;
        }
      }
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
      <Img className="content-image" src={image} alt={alt} loader={<div className="content-image"/>}/>
      { view }
    </div>
  )
}

export default ContentWindow;
