import React from 'react';

const Checkbox = (props) => {
  return(
    <div>
      <div className="checkbox">
        <label>{props.name}</label>
        <input
          name={props.inputName}
          checked={props.value}
          className="hike-switch"
          type="checkbox"
        />
      </div>
  </div>
  );
}

export default Checkbox;
