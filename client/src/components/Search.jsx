import React from 'react';
import RangeParameters from './RangeParameters';
import HikeRegions from './HikeRegions';
import HikeFeatures from './HikeFeatures';
import PassRequirements from './PassRequirements';
import Miscellaneous from './Miscellaneous';

const Search = (props) => {

  console.log(props.parameters);

  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <form>
        <RangeParameters parameters={props.parameters} setParameters={props.setParameters} />
        <HikeRegions parameters={props.parameters} setParameters={props.setParameters} />
        <HikeFeatures parameters={props.parameters} setParameters={props.setParameters} />
        <PassRequirements parameters={props.parameters} setParameters={props.setParameters} />
        <Miscellaneous parameters={props.parameters} setParameters={props.setParameters} />
        <button onClick={props.searchHikes}>Search Hikes</button>
      </form>
    </div>
  )
}

export default Search;
