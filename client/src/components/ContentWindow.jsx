import React, { useState, useEffect } from 'react';
import Img from 'react-image';
import About from './About';
import Search from './Search';
import HikeDetails from './HikeDetails';
import trees from '../assets/img/trees.jpg';
import search from '../assets/img/search.jpg';

const ContentWindow = (props) => {
  const [parameters, setParameters] = useState({
    distance: 50,
    lengthMin: 0,
    lengthMax: 50,
    elevationMin: 0,
    elevationMax: 10000,
    elevationGainMin: 0,
    elevationGainMax: 10000,
    minRating: 0,
    centralCascades: true,
    centralWashington: true,
    easternWashington: true,
    issaquahAlps: true,
    mountRainierArea: true,
    northCascades: true,
    olympicPeninsula: true,
    pugetSoundIslands: true,
    snoqualmieRegion: true,
    southCascades: true,
    southwestWashington: true,
    coast: false,
    rivers: false,
    lakes: false,
    waterfalls: false,
    oldGrowth: false,
    fallFoliage: false,
    wildflowersMeadows: false,
    mountainViews: false,
    summits: false,
    wildlife: false,
    ridgesPasses: false,
    establishedCampsites: false,
    discoverPass: true,
    nationalParkPass: true,
    northwestForestPass: true,
    oregonStateParksDayUse: true,
    snoParksPermit: true,
    kidFriendly: false,
    dogFriendly: false
  });

  const searchHikes = (e) => {
    //console.log('/getHikes?' + convertToURI(parameters));
    props.setContentWindowExpanded(false);
    e.preventDefault();
    fetch('/getHikes?' + convertToURI(parameters), {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then(response => response.json())
      .then((result) => {
        props.setHikes(result);
      })
  }

  const convertToURI = (obj) => {
    var str = '';
    for (var key in obj) {
      if (str !== '') {
          str += '&';
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  }

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
          parameters={parameters}
          setParameters={setParameters}
          setHikes={props.setHikes}
          setContentWindowExpanded={props.setContentWindowExpanded}
          searchHikes={searchHikes}
        />
      );
      image = search;
      alt = "Person Hiking";
      break;
    case 'hike-info':
      if(!props.selectedHike) {
        view = (
          <Search
            parameters={parameters}
            setParameters={setParameters}
            setHikes={props.setHikes}
            setContentWindowExpanded={props.setContentWindowExpanded}
            searchHikes={searchHikes}
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
      <div>
      <Img className="content-image" src={image} alt={alt} loader={<div className="content-image"/>}/>
      { view }
      </div>
    </div>
  )
}

export default ContentWindow;
