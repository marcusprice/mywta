import React from 'react';
import Checkbox from '../Checkbox/';

const HikeFeatures = props => {
  
  //props
  const {
    parameters,       //search parameters
    setParameters     //function to set search parameters
  } = props;
  
  return (
    <div>
      <h3>Hike Features</h3>

      <Checkbox
        name="Coast"
        inputName="coast"
        value={parameters.coast}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Rivers"
        inputName="rivers"
        value={parameters.rivers}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Lakes"
        inputName="lakes"
        value={parameters.lakes}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Waterfalls"
        inputName="waterfalls"
        value={parameters.waterfalls}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Old Growth"
        inputName="oldGrowth"
        value={parameters.oldGrowth}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Fall Foliage"
        inputName="fallFoliage"
        value={parameters.fallFoliage}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Mountain Views"
        inputName="mountainViews"
        value={parameters.mountainViews}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Summits"
        inputName="summits"
        value={parameters.summits}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Wildlife"
        inputName="wildlife"
        value={parameters.wildlife}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Ridges &amp; Passes"
        inputName="ridgesPasses"
        value={parameters.ridgesPasses}
        setParameters={setParameters}
        parameters={parameters} />

      <Checkbox
        name="Established Campsites"
        inputName="establishedCampsites"
        value={parameters.establishedCampsites}
        setParameters={setParameters}
        parameters={parameters} />
    </div>
  );
}

export default HikeFeatures;