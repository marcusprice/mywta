import React, { useEffect } from 'react';
import HikeRating from './HikeRating';
import HikeFeatureIcons from './HikeFeatureIcons';
import DOMPurify from 'dompurify';

const HikeDetails = (props) => {
  useEffect(() => {
    document.querySelector('.content-window').scrollTop = 0;
  });

  //sanitize html to prevent XSS attacks
  let hikeInfoPurified = DOMPurify.sanitize(props.hike.info);
  let drivingDirectionsPurified = DOMPurify.sanitize(props.hike.drivingdirections);

  const handleTrailType = () => {
    let output;
    if(props.hike.length === 2000) {
      output = 'Unknown';
    } else {
      let miles = (props.hike.length === 1) ? ' mile ' : ' miles ';
      if(props.hike.trailtype === 'trails') {
        output = props.hike.length +  miles + 'of trails';
      } else {
        output =  props.hike.length +  miles + props.hike.trailtype;
      }
    }

    return output;
  }

  const handleText = (section, originalText, purifiedText) => {
    let output;
    if(originalText === '') {
      output = '';
    } else {
      output = (
        <>
          <h3>{section}</h3>
          <p dangerouslySetInnerHTML={{__html: purifiedText}} />
        </>
      )
    }

    return output;
  }

  return(
    <div className="content-section">
      <h2>{props.hike.name}</h2>
      <HikeRating rating={props.hike.rating} />

      <span className="region">{props.hike.region}</span>
      <span className="coordinates">{props.hike.latitude}, {props.hike.longitude}</span>

      <HikeFeatureIcons hike={props.hike} />

      <h3>Length</h3>
      <span className="length">
        {handleTrailType()}
      </span>

      <h3>Elevation</h3>
      <span>Elevation Gain {(props.hike.elevationgain === 15000) ? 'Unknown' : props.hike.elevationgain + ' ft.'}</span>
      <span>Highest Point {(props.hike.elevation === 15000) ? 'Unknown' : props.hike.elevation + ' ft.'}</span>

      <h3>Pass Requirements</h3>
      <span>{props.hike.passrequired}</span>

      {handleText('About', props.hike.info, hikeInfoPurified)}
      {handleText('Directions', props.hike.drivingdirections, drivingDirectionsPurified)}
    </div>
  );
}

export default HikeDetails;
