import React from 'react';
import Checkbox from './Checkbox';

const HikeRegions = () => {
  return(
    <div>
      <h3>Hike Regions</h3>
      <Checkbox
        name="Mount Rainier Area"
        inputName="mountRainierArea"
        value={true}
      />
      <Checkbox
        name="North Cascades"
        inputName="northCascades"
        value={true}
      />
      <Checkbox
        name="Olympic Peninsula"
        inputName="olympicPeninsula"
        value={true}
      />

      <Checkbox
        name="Puget Sound &amp; Islands"
        inputName="pugetSoundIslands"
        value={true}
      />

      <Checkbox
        name="Snoqualmie Region"
        inputName="snoqualmieRegion"
        value={true}
      />

      <Checkbox
        name="South Cascades"
        inputName="southCascades"
        value={true}
      />

      <Checkbox
        name="Southwest Washington"
        inputName="southwestWashington"
        value={true}
      />
    </div>
  )
}

export default HikeRegions;
