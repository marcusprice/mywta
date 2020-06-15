import React from 'react';
import RangeSlider from './RangeSlider';
import DualRangeSlider from './DualRangeSlider';

const RangeParameters = ({
  locationEnabled,    //whether location is enabled or not
  parameters,         //the search parameters
  setParameters       //function to set the search parameters
}) => {

  const handleDistanceFromYou = () => {
    let output;
    if(locationEnabled) {
      output = (
        <RangeSlider
          title="Distance From You"
          name="distance"
          unit="Mile"
          min="1"
          max="100"
          step={1}
          value={parameters.distance}
          parameters={parameters}
          setParameters={setParameters}
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
        parameters={parameters}
        setParameters={setParameters}
      />

      <DualRangeSlider
        title="Elevation"
        name="elevation"
        unit="Feet"
        min={0}
        max={10000}
        step={100}
        parameters={parameters}
        setParameters={setParameters}
      />

      <DualRangeSlider
        title="Elevation Gain"
        name="elevationGain"
        unit="Feet"
        min={0}
        max={10000}
        step={100}
        parameters={parameters}
        setParameters={setParameters}
      />


      <RangeSlider
        title="Minimum Rating"
        name="minRating"
        unit="/ 5"
        min={0.0}
        max={5.0}
        step={.1}
        value={parameters.minRating}
        parameters={parameters}
        setParameters={setParameters}
      />
    </div>
  )
}

export default RangeParameters;
