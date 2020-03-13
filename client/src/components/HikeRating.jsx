import React from 'react';

const HikeRating = (props) => {
  //convert rating to percentage
  let rating = (props.rating / 5) * 100;

  return(
    <div className="rating-container">
      <div className="stars-outer">
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
        <div className="stars-inner" style={{width: rating + '%'}}>
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
