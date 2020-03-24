import React from 'react';
import Checkbox from './Checkbox';

const HikeRegions = (props) => {
  return(
    <div>
      <h3>Hike Regions</h3>
      <Checkbox
        name="Mount Rainier Area"
        inputName="mountRainierArea"
        value={props.parameters.mountRainierArea}
      />
      <Checkbox
        name="North Cascades"
        inputName="northCascades"
        value={props.parameters.northCascades}
      />
      <Checkbox
        name="Olympic Peninsula"
        inputName="olympicPeninsula"
        value={props.parameters.olympicPeninsula}
      />

      <Checkbox
        name="Puget Sound &amp; Islands"
        inputName="pugetSoundIslands"
        value={props.parameters.pugetSoundIslands}
      />

      <Checkbox
        name="Snoqualmie Region"
        inputName="snoqualmieRegion"
        value={props.parameters.snoqualmieRegion}
      />

      <Checkbox
        name="South Cascades"
        inputName="southCascades"
        value={props.parameters.southCascades}
      />

      <Checkbox
        name="Southwest Washington"
        inputName="southwestWashington"
        value={props.parameters.southwestWashington}
      />
    </div>
  )
}

export default HikeRegions;
