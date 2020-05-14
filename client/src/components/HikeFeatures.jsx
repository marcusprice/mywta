import React from 'react';
import Checkbox from './Checkbox';

const HikeFeatures = (props) => {
  return(
    <div>
      <h3>Hike Features</h3>

      <Checkbox
        name="Coast"
        inputName="coast"
        value={props.parameters.coast}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Rivers"
        inputName="rivers"
        value={props.parameters.rivers}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Lakes"
        inputName="lakes"
        value={props.parameters.lakes}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Waterfalls"
        inputName="waterfalls"
        value={props.parameters.waterfalls}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Old Growth"
        inputName="oldGrowth"
        value={props.parameters.oldGrowth}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Fall Foliage"
        inputName="fallFoliage"
        value={props.parameters.fallFoliage}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Mountain Views"
        inputName="mountainViews"
        value={props.parameters.mountainViews}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Summits"
        inputName="summits"
        value={props.parameters.summits}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Wildlife"
        inputName="wildlife"
        value={props.parameters.wildlife}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Ridges &amp; Passes"
        inputName="ridgesPasses"
        value={props.parameters.ridgesPasses}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Established Campsites"
        inputName="establishedCampsites"
        value={props.parameters.establishedCampsites}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />
    </div>
  );
}

export default HikeFeatures;
