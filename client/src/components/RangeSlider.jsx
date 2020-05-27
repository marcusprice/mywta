import React, { useState } from 'react';

const RangeSlider = (props) => {
  const [value, setValue] = useState(props.value);

  const handlePlural = () => {
    if(value > 1 && props.unit === "Mile") {
      return 's';
    } else {
      return '';
    }
  }

  const handlePlus = () => {
    return (value === props.max) ? '+' : '';
  }

  const handleChange = (e) => {
    //update the slider's value
    setValue(e.target.value);
    //update the parameters' property
    props.setParameters({...props.parameters, [props.name]: e.target.value})
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{props.title}</span>
        <span>{value + handlePlus() + ' ' + props.unit + handlePlural()}</span>
      </label>
      <div className="multi-range-input">
        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default RangeSlider;
