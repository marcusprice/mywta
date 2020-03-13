import React from 'react';
import Checkbox from './Checkbox';

const HikeFeatures = () => {
  return(
    <div>
      <h3>Hike Features</h3>

      <Checkbox
        name="Coast"
        inputName="coast"
        value={true}
      />

      <Checkbox
        name="Rivers"
        inputName="rivers"
        value={true}
      />

      <Checkbox
        name="Lakes"
        inputName="lakes"
        value={true}
      />

      <Checkbox
        name="Waterfalls"
        inputName="waterfalls"
        value={true}
      />

      <Checkbox
        name="Old Growth"
        inputName="oldGrowth"
        value={true}
      />

      <Checkbox
        name="Fall Foliage"
        inputName="fallFoliage"
        value={true}
      />

      <Checkbox
        name="Mountain Views"
        inputName="mountainViews"
        value={true}
      />

      <Checkbox
        name="Summits"
        inputName="summits"
        value={true}
      />

      <Checkbox
        name="WildLife"
        inputName="wildlife"
        value={true}
      />

      <Checkbox
        name="Ridges &amp; Passes"
        inputName="ridgesPasses"
        value={true}
      />

      <Checkbox
        name="Established Campsites"
        inputName="establishCampsites"
        value={true}
      />
    </div>
  );
}

export default HikeFeatures;
