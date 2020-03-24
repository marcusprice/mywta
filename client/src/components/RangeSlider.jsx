import React, { useState } from 'react';

const RangeSlider = (props) => {
  const [value, setValue] = useState(props.value);

  const handlePlural = () => {
    if(value > 1 && props.unit === "Mile") {
      return 's';
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{props.title}</span>
        <span>{value} {props.unit}{handlePlural()}</span>
      </label>
      <div className="multi-range-input">
        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.value}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default RangeSlider;
