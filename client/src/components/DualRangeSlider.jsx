import React from 'react';

const DualRangeSlider = (props) => {
  const handleChange = (event) => {
    let item = event.target.name; //the main item to be updated
    let value = parseFloat(event.target.value); //new item value
    let name = this.props.name; //this is for changing the opposite input when they are equal
    let step = parseFloat(this.props.step); //stepped value
    let minValue = parseFloat(this.props.minValue); //current min value
    let maxValue = parseFloat(this.props.maxValue); //current max value
  }

  return(
    <div className="multi-range">
      <label className="multi-range-label">
        <span>{props.title}</span>
        <span>{props.minValue + ' - ' + props.max + ' ' + props.unit}</span>
      </label>
      <div className="multi-range-input">
        <input
          type="range"
          name={props.name + 'Min'}
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.minValue}
          onChange={handleChange}
        />

        <input
          type="range"
          name={props.name + 'Max'}
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.maxValue}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default DualRangeSlider;
