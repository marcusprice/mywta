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
        setParameters={props.setParameters}
        parameters={props.parameters}
      />
      <Checkbox
        name="North Cascades"
        inputName="northCascades"
        value={props.parameters.northCascades}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />
      <Checkbox
        name="Olympic Peninsula"
        inputName="olympicPeninsula"
        value={props.parameters.olympicPeninsula}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Puget Sound &amp; Islands"
        inputName="pugetSoundIslands"
        value={props.parameters.pugetSoundIslands}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Snoqualmie Region"
        inputName="snoqualmieRegion"
        value={props.parameters.snoqualmieRegion}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="South Cascades"
        inputName="southCascades"
        value={props.parameters.southCascades}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Southwest Washington"
        inputName="southwestWashington"
        value={props.parameters.southwestWashington}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />
    </div>
  )
}

export default HikeRegions;
