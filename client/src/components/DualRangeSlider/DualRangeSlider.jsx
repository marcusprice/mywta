import React, { useState } from 'react';

const DualRangeSlider = ({
  title,          //title of slider
  name,           //parameter name (in parent)
  unit,           //unit (either miles or feet)
  min,            //minimum accepted value
  max,            //maxiumum accepted value
  step,           //how much the slider should increment/decrement
  parameters,     //the parameters
  setParameters   //function to set the parameters
}) => {
  
  const [minSliderValue, setMinSliderValue] = useState(min);
  const [maxSliderValue, setMaxSliderValue] = useState(max);

  const handleMinChange = (e) => {
    const newValue = parseInt(e.target.value);

    if(newValue <= (max - step)) {
      setMinSliderValue(newValue);

      if(newValue >= maxSliderValue) {
        setMaxSliderValue(newValue + step);
        setParameters({...parameters, [name + 'Min']: newValue, [name + 'Max']: newValue + step});
      } else {
        setParameters({...parameters, [name + 'Min']: newValue});
      }
    }
  }

  const handleMaxChange = (e) => {
    const newValue = parseInt(e.target.value);

    if(newValue >= min + step) {
      setMaxSliderValue(newValue);

      if(newValue <= minSliderValue) {
        setMinSliderValue(newValue - step);
        setParameters({...parameters, [name + 'Min']: newValue - step, [name + 'Max']: newValue});
      } else {
        setParameters({...parameters, [name + 'Max']: newValue});
      }
    }
  }

  const handlePlus = () => {
    return (maxSliderValue === parseFloat(max)) ? '+' : '';
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{title}</span>
        <span>{minSliderValue + ' - ' + maxSliderValue + handlePlus() + ' ' + unit}</span>
      </label>

      <div className="multi-range-input">
        <input
          type="range"
          name={name + 'Min'}
          min={min}
          max={max}
          step={step}
          value={minSliderValue}
          onChange={handleMinChange}
        />

        <input
          type="range"
          name={name + 'Max'}
          min={min}
          max={max}
          step={step}
          value={maxSliderValue}
          onChange={handleMaxChange}
          className="transparent-slider"
        />

      </div>
    </div>
  )
}

export default DualRangeSlider;
