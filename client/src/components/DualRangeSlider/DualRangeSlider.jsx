import React, { useState } from 'react';
import './dualRangeSlider.css';

const DualRangeSlider = props => {
  
  //props
  const {
    title,          //title of slider
    name,           //parameter name (in parent)
    unit,           //unit (either miles or feet)
    min,            //minimum accepted value
    max,            //maxiumum accepted value
    step,           //how much the slider should increment/decrement
    parameters,     //the parameters
    setParameters   //function to set the parameters
  } = props;

  //state
  const [minSliderValue, setMinSliderValue] = useState(min);
  const [maxSliderValue, setMaxSliderValue] = useState(max);

  //handles value changes when min slider is changed
  const handleMinChange = e => {
    const newValue = parseInt(e.target.value);

    //only update if the new min value is less than or equal to (max value - step)
    if(newValue <= (max - step)) {
      setMinSliderValue(newValue);

      //if the new min value is larger or equal to max value
      if(newValue >= maxSliderValue) {
        //increase max value by the step and update params
        setMaxSliderValue(newValue + step);
        setParameters({...parameters, [name + 'Min']: newValue, [name + 'Max']: newValue + step});
      } else {
        //update params
        setParameters({...parameters, [name + 'Min']: newValue});
      }
    }
  }

  //handles value changes when max slider is changed
  const handleMaxChange = e => {
    const newValue = parseInt(e.target.value);

    //only update if the new max value is larger than or equal to (min value + step)
    if(newValue >= min + step) {
      setMaxSliderValue(newValue);

      //if the new max value is smaller or equal to min value
      if(newValue <= minSliderValue) {
        //decrease min value by the step and update params
        setMinSliderValue(newValue - step);
        setParameters({...parameters, [name + 'Min']: newValue - step, [name + 'Max']: newValue});
      } else {
        //update params
        setParameters({...parameters, [name + 'Max']: newValue});
      }
    }
  }

  //adds + if the max slider is at maximum value
  const handlePlus = () => {
    return (maxSliderValue === parseFloat(max)) ? '+' : '';
  }

  return(
    <label className="dual-range">

      <div className="dual-range-title">
        <span>{title}</span>
        <span>{minSliderValue + ' - ' + maxSliderValue + handlePlus() + ' ' + unit}</span>
      </div>

      <div className="dual-range-input">
        <input
          type="range"
          name={name + 'Min'}
          min={min}
          max={max}
          step={step}
          value={minSliderValue}
          onChange={handleMinChange} />

        <input
          type="range"
          name={name + 'Max'}
          min={min}
          max={max}
          step={step}
          value={maxSliderValue}
          onChange={handleMaxChange}
          className="transparent-slider" />
      </div>
    </label>
  )
}

export default DualRangeSlider;
