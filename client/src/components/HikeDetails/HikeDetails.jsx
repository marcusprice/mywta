import React from 'react';
import HikeRating from '../HikeRating/';
import HikeFeatureIcons from '../HikeFeatureIcons/';
import DOMPurify from 'dompurify';
import './hikeDetails.css';

const HikeDetails = props => {
  //props
  const {
    hike  //the selected hike
  } = props;

  //sanitize html to prevent XSS attacks
  let hikeInfoPurified = DOMPurify.sanitize(hike.info);
  let drivingDirectionsPurified = DOMPurify.sanitize(hike.drivingdirections);

  const handleTrailType = () => {
    let output;
    if(hike.length === 2000) {
      output = 'Unknown';
    } else {
      let miles = (hike.length === 1) ? ' mile ' : ' miles ';
      if(hike.trailtype === 'trails') {
        output = hike.length +  miles + 'of trails';
      } else {
        output =  hike.length +  miles + hike.trailtype;
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
    <>
      <h2>{hike.name}</h2>
      <span className="region">{hike.region}</span>
      <HikeRating rating={hike.rating} />


      <span className="wta-link">
        <a href={hike.url} target="_blank" rel="noopener noreferrer">
          WTA Link
        </a>
      </span>

      <span className="coordinates">
        <a href={'https://www.google.com/maps/search/?api=1&query=' + hike.latitude + ',' + hike.longitude} target="_blank" rel="noopener noreferrer">
          {hike.latitude}, {hike.longitude}
        </a>
      </span>

      <HikeFeatureIcons hike={hike} />

      <h3>Length</h3>
      <span className="length">
        {handleTrailType()}
      </span>

      <h3>Elevation</h3>
      <span>Elevation Gain {(hike.elevationgain === 15000) ? 'Unknown' : hike.elevationgain + ' ft.'}</span>
      <span>Highest Point {(hike.elevation === 15000) ? 'Unknown' : hike.elevation + ' ft.'}</span>

      <h3>Pass Requirements</h3>
      <span>{hike.passrequired}</span>

      {handleText('About', hike.info, hikeInfoPurified)}
      {handleText('Directions', hike.drivingdirections, drivingDirectionsPurified)}
    </>
  );
}

export default HikeDetails;