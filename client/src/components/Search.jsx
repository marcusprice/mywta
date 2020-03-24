import React from 'react';
import RangeParameters from './RangeParameters';
import HikeRegions from './HikeRegions';
import HikeFeatures from './HikeFeatures';
import PassRequirements from './PassRequirements';
import Miscellaneous from './Miscellaneous';

const Search = (props) => {
  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <form>
        <RangeParameters parameters={props.parameters} />
        <HikeRegions parameters={props.parameters} />
        <HikeFeatures parameters={props.parameters} />
        <PassRequirements parameters={props.parameters} />
        <Miscellaneous parameters={props.parameters} />
        <button>Search Hikes</button>
      </form>
    </div>
  )
}

export default Search;
