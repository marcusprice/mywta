import React, { useState } from 'react';

const RangeSlider = ({
  title,          //title of slider
  name,           //parameter name (in parent)
  unit,           //unit (either miles or feet)
  min,            //minimum accepted value
  max,            //maxiumum accepted value
  step,           //how much the slider should increment/decrement
  value,          //value of the slider
  parameters,     //the parameters
  setParameters   //function to set the parameters
}) => {

  const [sliderValue, setSliderValue] = useState(value);

  const handlePlural = () => {
    if(value > 1 && unit === "Mile") {
      return 's';
    } else {
      return '';
    }
  }

  const handlePlus = () => {
    return (value === max) ? '+' : '';
  }

  const handleChange = (e) => {
    //update the slider's value
    setSliderValue(e.target.value);
    //update the parameters' property
    setParameters({...parameters, [name]: e.target.value})
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{title}</span>
        <span>{sliderValue + handlePlus() + ' ' + unit + handlePlural()}</span>
      </label>
      <div className="multi-range-input">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default RangeSlider;
