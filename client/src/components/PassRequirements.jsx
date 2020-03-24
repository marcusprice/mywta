import React from 'react';
import Checkbox from './Checkbox';

const PassRequirements = (props) => {
  return(
    <div>
      <h3>Pass Requirements</h3>

      <Checkbox
        name="Discover Pass"
        inputName="coast"
        value={props.parameters.discoverPass}
      />

      <Checkbox
        name="Northwest Forest Pass"
        inputName="coast"
        value={props.parameters.northwestForestPass}
      />
      
    </div>
  );
}

export default PassRequirements;
