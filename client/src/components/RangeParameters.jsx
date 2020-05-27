import React from 'react';
import RangeSlider from './RangeSlider';
import DualRangeSlider from './DualRangeSlider';

const RangeParameters = (props) => {

  const handleDistanceFromYou = () => {
    let output;
    if(props.locationEnabled) {
      output = (
        <RangeSlider
          title="Distance From You"
          name="distance"
          unit="Mile"
          min="1"
          max="100"
          step={1}
          value={props.parameters.distance}
          parameters={props.parameters}
          setParameters={props.setParameters}
        />
      )
    } else {
      output = '';
    }
    return output;
  }

  return(
    <div>
      <h3>Hike Range Parameters</h3>

      {handleDistanceFromYou()}

      <DualRangeSlider
        title="Length"
        name="length"
        unit="Miles"
        min={0}
        max={50}
        step={1}
        minValue={props.parameters.lengthMin}
        maxValue={props.parameters.lengthMax}
        parameters={props.parameters}
        setParameters={props.setParameters}
      />

      <DualRangeSlider
        title="Elevation"
        name="elevation"
        unit="Feet"
        min={0}
        max={10000}
        step={100}
        minValue={props.parameters.elevationMin}
        maxValue={props.parameters.elevationMax}
        parameters={props.parameters}
        setParameters={props.setParameters}
      />

      <DualRangeSlider
        title="Elevation Gain"
        name="elevationGain"
        unit="Feet"
        min={0}
        max={10000}
        step={100}
        minValue={props.parameters.elevationGainMin}
        maxValue={props.parameters.elevationGainMax}
        parameters={props.parameters}
        setParameters={props.setParameters}
      />


      <RangeSlider
        title="Minimum Rating"
        name="minRating"
        unit="/ 5"
        min={0.0}
        max={5.0}
        step={.1}
        value={props.parameters.minRating}
        parameters={props.parameters}
        setParameters={props.setParameters}
      />
    </div>
  )
}

export default RangeParameters;
