import React from 'react';
import HikeRating from './HikeRating';
import DOMPurify from 'dompurify';

const HikeDetails = (props) => {
  //sanitize html to prevent XSS attacks
  let hikeInfoPurified = DOMPurify.sanitize(props.hike.info);
  let drivingDirectionsPurified = DOMPurify.sanitize(props.hike.drivingdirections);
  //replace some of the ASCII characters that come up in the scraped data
  //hikeInfo = props.hike.info.replace(/\â€™/g, '\'').replace(/\Â/g, '');

  //infoText = infoText.replace(/\â€™/g, '\'').replace(/\Â/g, '').replace(/<br>/g, '\n');

  return(
    <div className="content-section">
      <h2>{props.hike.name}</h2>
      <HikeRating rating={props.hike.rating} />

      <span className="region">{props.hike.region}</span>
      <span className="coordinates">{props.hike.latitude}, {props.hike.longitude}</span>

      <h3>Basic Info</h3>
      <span className="length">{props.hike.length} miles {props.hike.trailtype}</span>

      <h3>Elevation</h3>
      <span>{props.hike.elevationgain} ft Elevation Gain</span>
      <span>Highest Point {props.hike.elevation} ft</span>

      <h3>Pass Requirements</h3>
      <span>{props.hike.passrequired}</span>

      <h3>About</h3>
      <p dangerouslySetInnerHTML={{__html: hikeInfoPurified}} />

      <h3>Directions</h3>
      <p dangerouslySetInnerHTML={{__html: drivingDirectionsPurified}} />
    </div>
  );
}

export default HikeDetails;
