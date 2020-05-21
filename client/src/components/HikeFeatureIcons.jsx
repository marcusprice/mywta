import React from 'react';
import coast from '../assets/icons/coast.svg';
import dogFriendly from '../assets/icons/dogFriendly.svg';
import establishedCampsites from '../assets/icons/establishedCampsites.svg';
import fallFoliage from '../assets/icons/fallFoliage.svg';
import kidFriendly from '../assets/icons/kidFriendly.svg';
import lakes from '../assets/icons/lakes.svg';
import mountainViews from '../assets/icons/mountainViews.svg';
import oldGrowth from '../assets/icons/oldGrowth.svg';
import ridgesPasses from '../assets/icons/ridgesPasses.svg';
import rivers from '../assets/icons/rivers.svg';
import summits from '../assets/icons/summits.svg';
import waterfalls from '../assets/icons/waterfalls.svg';
import wildflowersMeadows from '../assets/icons/wildflowersMeadows.svg';
import wildlife from '../assets/icons/wildlife.svg';

const HikeFeatureIcons = (props) => {

  return(
    <div className="hike-features-container">
        {props.hike.coast ? <img className="hike-feature-icon"src={coast} />: ''}
        {props.hike.dogs ? <img className="hike-feature-icon" src={dogFriendly} />: ''}
        {props.hike.establishedcampsites ? <img className="hike-feature-icon"  src={establishedCampsites} />: ''}
        {props.hike.fallfoliage ? <img className="hike-feature-icon" src={fallFoliage} />: ''}
        {props.hike.kids ? <img className="hike-feature-icon" src={kidFriendly} />: ''}
        {props.hike.lakes ? <img className="hike-feature-icon" src={lakes} />: ''}
        {props.hike.mountainviews ? <img className="hike-feature-icon" src={mountainViews} />: ''}
        {props.hike.oldgrowth ? <img className="hike-feature-icon" src={oldGrowth} />: ''}
        {props.hike.ridgespasses ? <img className="hike-feature-icon" src={ridgesPasses} />: ''}
        {props.hike.rivers ? <img className="hike-feature-icon" src={rivers} />: ''}
        {props.hike.summits ? <img className="hike-feature-icon" src={summits} />: ''}
        {props.hike.waterfalls ? <img className="hike-feature-icon" src={waterfalls} />: ''}
        {props.hike.wildflowersmeadows ? <img className="hike-feature-icon" src={wildflowersMeadows} />: ''}
        {props.hike.wildlife ? <img  className="hike-feature-icon" src={wildlife} />: ''}
    </div>
  );
}

export default HikeFeatureIcons
