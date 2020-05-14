import React from 'react';
import Checkbox from './Checkbox';

const HikeRegions = (props) => {
  return(
    <div>
      <h3>Hike Regions</h3>
      <Checkbox
        name="Central Cascades"
        inputName="centralCascades"
        value={props.parameters.centralCascades}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Central Washington"
        inputName="centralWashington"
        value={props.parameters.centralWashington}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Eastern Washington"
        inputName="easternWashington"
        value={props.parameters.easternWashington}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Issaquah Alps"
        inputName="issaquahAlps"
        value={props.parameters.issaquahAlps}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

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
