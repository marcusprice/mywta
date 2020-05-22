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


  const handleFeatures = () => {
    const featureTags = [];
    let output;

    if(props.hike.coast) featureTags.push(<img key={1} alt="hike feature icon" className="hike-feature-icon"src={coast} />);
    if(props.hike.dogs) featureTags.push(<img key={2} alt="hike feature icon" className="hike-feature-icon"src={dogFriendly} />);
    if(props.hike.establishedcampsites) featureTags.push(<img key={3} alt="hike feature icon" className="hike-feature-icon"src={establishedCampsites} />);
    if(props.hike.fallfoliage) featureTags.push(<img key={4} alt="hike feature icon" className="hike-feature-icon"src={fallFoliage} />);
    if(props.hike.kids) featureTags.push(<img key={5} alt="hike feature icon" className="hike-feature-icon"src={kidFriendly} />);
    if(props.hike.lakes) featureTags.push(<img key={6} alt="hike feature icon" className="hike-feature-icon"src={lakes} />);
    if(props.hike.mountainviews) featureTags.push(<img key={7} alt="hike feature icon" className="hike-feature-icon"src={mountainViews} />);
    if(props.hike.oldgrowth) featureTags.push(<img key={8} alt="hike feature icon" className="hike-feature-icon"src={oldGrowth} />);
    if(props.hike.ridgespasses) featureTags.push(<img key={9} alt="hike feature icon" className="hike-feature-icon"src={ridgesPasses} />);
    if(props.hike.rivers) featureTags.push(<img key={10} alt="hike feature icon" className="hike-feature-icon"src={rivers} />);
    if(props.hike.summits) featureTags.push(<img key={11} alt="hike feature icon" className="hike-feature-icon"src={summits} />);
    if(props.hike.waterfalls) featureTags.push(<img key={12} alt="hike feature icon" className="hike-feature-icon"src={waterfalls} />);
    if(props.hike.wildflowersmeadows) featureTags.push(<img key={13} alt="hike feature icon" className="hike-feature-icon"src={wildflowersMeadows} />);
    if(props.hike.wildlife) featureTags.push(<img key={14} alt="hike feature icon" className="hike-feature-icon"src={wildlife} />);

    if(featureTags.length > 0) {
      output = (
        <>
          <h3>Features</h3>
          {featureTags}
        </>
      )
    } else {
      output = '';
    }

    return output;
  }

  return handleFeatures();
}

export default HikeFeatureIcons
