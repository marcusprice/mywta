import React, { useState } from 'react';

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.value);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    props.setParameters({...props.parameters, [props.inputName]: e.target.checked});
  }

  return(
    <div>
      <div className="checkbox">
        <label>{props.name}</label>
        <input
          name={props.inputName}
          checked={checked}
          className="hike-switch"
          type="checkbox"
          onChange={handleChange}
        />
      </div>
  </div>
  );
}

export default Checkbox;
