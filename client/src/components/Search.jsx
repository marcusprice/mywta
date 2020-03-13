import React from 'react';
import RangeParameters from './RangeParameters';
import HikeRegions from './HikeRegions';
import HikeFeatures from './HikeFeatures';
import PassRequirements from './PassRequirements';
import Miscellaneous from './Miscellaneous';

const Search = () => {
  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <form>
        <RangeParameters />
        <HikeRegions />
        <HikeFeatures />
        <PassRequirements />
        <Miscellaneous />
        <button>Search Hikes</button>
      </form>
    </div>
  )
}

export default Search;
