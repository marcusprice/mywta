import React, { useState } from 'react';

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.value);

  return(
    <div>
      <div className="checkbox">
        <label>{props.name}</label>
        <input
          name={props.inputName}
          checked={checked}
          className="hike-switch" 
          type="checkbox"
          onChange={(e) => {setChecked(e.target.checked)}}
        />
      </div>
  </div>
  );
}

export default Checkbox;
