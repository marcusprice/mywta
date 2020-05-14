import React, { useState } from 'react';
import RangeParameters from './RangeParameters';
import HikeRegions from './HikeRegions';
import HikeFeatures from './HikeFeatures';
import PassRequirements from './PassRequirements';
import Miscellaneous from './Miscellaneous';

const Search = (props) => {
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

    e.preventDefault();
    fetch('/getHikes?' + convertToURI(parameters), {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then(response => response.json())
      .then((result) => {
        console.log(result);
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

  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <form>
        <RangeParameters parameters={parameters} setParameters={setParameters} />
        <HikeRegions parameters={parameters} setParameters={setParameters} />
        <HikeFeatures parameters={parameters} setParameters={setParameters} />
        <PassRequirements parameters={parameters} setParameters={setParameters} />
        <Miscellaneous parameters={parameters} setParameters={setParameters} />
        <button onClick={searchHikes}>Search Hikes</button>
      </form>
    </div>
  )
}

export default Search;
