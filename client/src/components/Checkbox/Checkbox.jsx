import React, { useState } from 'react';
import './checkbox.css';

const Checkbox = props => {
  
  //props
  const {
    name,             //the name of the checkbox item
    inputName,        //the parameter name
    value,            //the value 
    setParameters,    //function to set the parameter
    parameters        //the search parameters
  } = props;

  const [checked, setChecked] = useState(value);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    setParameters({...parameters, [inputName]: e.target.checked});
  }

  return(
    <label className="checkbox">
      { name }
      <input
        name={inputName}
        checked={checked}
        className="hike-switch"
        type="checkbox"
        onChange={handleChange}
      />
    </label>
  );
}

export default Checkbox;
