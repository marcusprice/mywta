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
    lengthMax: 20,
    elevationMin: 0,
    elevationMax: 5000,
    elevationGainMin: 0,
    elevationGainMax: 5000,
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
    northwestForestPass: true,
    kidFriendly: true,
    dogFriendly: true
  });

  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <form>
        <RangeParameters parameters={parameters} setParameters={setParameters} />
        <HikeRegions parameters={parameters} />
        <HikeFeatures parameters={parameters} />
        <PassRequirements parameters={parameters} />
        <Miscellaneous parameters={parameters} />
        <button>Search Hikes</button>
      </form>
    </div>
  )
}

export default Search;
