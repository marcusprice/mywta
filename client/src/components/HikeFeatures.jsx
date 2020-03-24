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
      />

      <Checkbox
        name="Rivers"
        inputName="rivers"
        value={props.parameters.rivers}
      />

      <Checkbox
        name="Lakes"
        inputName="lakes"
        value={props.parameters.lakes}
      />

      <Checkbox
        name="Waterfalls"
        inputName="waterfalls"
        value={props.parameters.waterfalls}
      />

      <Checkbox
        name="Old Growth"
        inputName="oldGrowth"
        value={props.parameters.oldGrowth}
      />

      <Checkbox
        name="Fall Foliage"
        inputName="fallFoliage"
        value={props.parameters.fallFoliage}
      />

      <Checkbox
        name="Mountain Views"
        inputName="mountainViews"
        value={props.parameters.mountainViews}
      />

      <Checkbox
        name="Summits"
        inputName="summits"
        value={props.parameters.summits}
      />

      <Checkbox
        name="WildLife"
        inputName="wildlife"
        value={props.parameters.wildlife}
      />

      <Checkbox
        name="Ridges &amp; Passes"
        inputName="ridgesPasses"
        value={props.parameters.ridgesPasses}
      />

      <Checkbox
        name="Established Campsites"
        inputName="establishCampsites"
        value={props.parameters.establishCampsites}
      />
    </div>
  );
}

export default HikeFeatures;
