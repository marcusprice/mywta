import React, { useState } from 'react';

const DualRangeSlider = (props) => {
  const [minValue, setMinValue] = useState(props.min);
  const [maxValue, setMaxValue] = useState(props.max);

  const handleMinChange = (e) => {
    const newValue = parseInt(e.target.value);

    if(newValue <= (props.max - props.step)) {
      setMinValue(newValue);

      if(newValue >= maxValue) {
        setMaxValue(newValue + props.step);
        props.setParameters({...props.parameters, [props.name + 'Min']: newValue, [props.name + 'Max']: newValue + props.step});
      } else {
        props.setParameters({...props.parameters, [props.name + 'Min']: newValue});
      }
    }
  }

  const handleMaxChange = (e) => {
    const newValue = parseInt(e.target.value);

    if(newValue >= props.min + props.step) {
      setMaxValue(newValue);
      
      if(newValue <= minValue) {
        setMinValue(newValue - props.step);
        props.setParameters({...props.parameters, [props.name + 'Min']: newValue - props.step, [props.name + 'Max']: newValue});
      } else {
        props.setParameters({...props.parameters, [props.name + 'Max']: newValue});
      }
    }
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{props.title}</span>
        <span>{minValue + ' - ' + maxValue + ' ' + props.unit}</span>
      </label>

      <div className="multi-range-input">
        <input
          type="range"
          name={props.name + 'Min'}
          min={props.min}
          max={props.max}
          step={props.step}
          value={minValue}
          onChange={handleMinChange}
        />

        <input
          type="range"
          name={props.name + 'Max'}
          min={props.min}
          max={props.max}
          step={props.step}
          value={maxValue}
          onChange={handleMaxChange}
        />

      </div>
    </div>
  )
}

export default DualRangeSlider;
