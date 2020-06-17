import React from 'react';

const HikeRating = ({
  rating  //the hike rating
}) => {
  
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
