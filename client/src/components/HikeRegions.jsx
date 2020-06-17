import React from 'react';
import Checkbox from './Checkbox/';

const HikeRegions = ({
  parameters,       //search parameters
  setParameters     //function to set search parameters
}) => (
  <div>
    <h3>Hike Regions</h3>
    <Checkbox
      name="Central Cascades"
      inputName="centralCascades"
      value={parameters.centralCascades}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Central Washington"
      inputName="centralWashington"
      value={parameters.centralWashington}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Eastern Washington"
      inputName="easternWashington"
      value={parameters.easternWashington}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Issaquah Alps"
      inputName="issaquahAlps"
      value={parameters.issaquahAlps}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Mount Rainier Area"
      inputName="mountRainierArea"
      value={parameters.mountRainierArea}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="North Cascades"
      inputName="northCascades"
      value={parameters.northCascades}
      setParameters={setParameters}
      parameters={parameters} />
    <Checkbox
      name="Olympic Peninsula"
      inputName="olympicPeninsula"
      value={parameters.olympicPeninsula}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Puget Sound &amp; Islands"
      inputName="pugetSoundIslands"
      value={parameters.pugetSoundIslands}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Snoqualmie Region"
      inputName="snoqualmieRegion"
      value={parameters.snoqualmieRegion}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="South Cascades"
      inputName="southCascades"
      value={parameters.southCascades}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Southwest Washington"
      inputName="southwestWashington"
      value={parameters.southwestWashington}
      setParameters={setParameters}
      parameters={parameters} />
  </div>
)

export default HikeRegions;
