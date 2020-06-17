import React from 'react';
import RangeParameters from '../RangeParameters/';
import HikeRegions from '../HikeRegions/';
import HikeFeatures from '../HikeFeatures/';
import PassRequirements from '../PassRequirements/';
import Miscellaneous from '../Miscellaneous/';

const Search = ({
  parameters,       //search parameters
  setParameters,    //function to set parameters
  searchHikes,      //function to trigger hike search
  locationEnabled   //whether user has allowed location or not
}) => (
  <>
    <h2>Search for Hikes</h2>
    <p>Use the form below to search for hikes.</p>
    <form>
      <RangeParameters locationEnabled={locationEnabled} parameters={parameters} setParameters={setParameters} />
      <HikeRegions parameters={parameters} setParameters={setParameters} />
      <HikeFeatures parameters={parameters} setParameters={setParameters} />
      <PassRequirements parameters={parameters} setParameters={setParameters} />
      <Miscellaneous parameters={parameters} setParameters={setParameters} />
      <button onClick={searchHikes}>Search Hikes</button>
    </form>
  </>
)

export default Search;
