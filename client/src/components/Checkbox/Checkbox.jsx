import React, { useState } from 'react';

const Checkbox = ({
  name,             //the name of the checkbox item
  inputName,        //the parameter name
  value,            //the value 
  setParameters,    //function to set the parameter
  parameters        //the search parameters
}) => {
  
  const [checked, setChecked] = useState(value);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    setParameters({...parameters, [inputName]: e.target.checked});
  }

  return(
    <div className="checkbox">
      <label>{name}</label>
      <input
        name={inputName}
        checked={checked}
        className="hike-switch"
        type="checkbox"
        onChange={handleChange}
      />
    </div>
  );
}

export default Checkbox;
