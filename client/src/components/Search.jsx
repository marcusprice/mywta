import React from 'react';
import RangeParameters from './RangeParameters';
import HikeRegions from './HikeRegions';

const Search = () => {
  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <RangeParameters />
      <HikeRegions />
    </div>
  )
}

export default Search;
