import React from 'react';
import './hikeRating.css';

const HikeRating = props => {
  
  //props
  const {
    rating  //the hike rating
  } = props;

  //convert rating to percentage
  let convertedRating = (rating / 5) * 100;

  return(
    <div className="rating-container">
      <div className="stars-outer">
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
        <div className="stars-inner" style={{width: convertedRating + '%'}}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
}

export default HikeRating;
