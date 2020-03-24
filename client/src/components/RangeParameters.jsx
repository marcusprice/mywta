import React from 'react';
import RangeSlider from './RangeSlider';
import DualRangeSlider from './DualRangeSlider';

const RangeParameters = (props) => {
  return(
    <div>
      <h3>Hike Range Parameters</h3>
      <RangeSlider
        title="Distance From You"
        name="distance"
        unit="Mile"
        min="1"
        max="100"
        step="1"
        value={props.parameters.distance}
      />

      <DualRangeSlider
        title="Length"
        name="length"
        unit="Miles"
        min="0"
        max="50"
        step="1"
        minValue={props.parameters.lengthMin}
        maxValue={props.parameters.lengthMax}
      />

      <DualRangeSlider
        title="Elevation"
        name="elevation"
        unit="Feet"
        min="0"
        max="10000"
        step="1"
        minValue={props.parameters.elevationMin}
        maxValue={props.parameters.elevationMax}
      />

      <DualRangeSlider
        title="Elevation Gain"
        name="elevationGain"
        unit="Feet"
        min="0"
        max="10000"
        step="1"
        minValue={props.parameters.elevationGainMin}
        maxValue={props.parameters.elevationGainMax}
      />


      <RangeSlider
        title="Minimum Rating"
        name="minRating"
        unit="/ 5"
        min="0.0"
        max="4.9"
        step=".1"
        value={props.parameters.minRating}
      />
    </div>
  )
}

export default RangeParameters;
