import React from 'react';

const RangeSlider = (props) => {

  const handlePlural = () => {
    console.log(props.value);
    if(props.value > 1 && props.unit === "Mile") {
      return 's';
    }
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{props.title}</span>
        <span>{props.value} {props.unit}{handlePlural()}</span>
      </label>
      <div className="multi-range-input">
        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.value}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default RangeSlider;