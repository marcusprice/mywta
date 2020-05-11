import React from 'react';
import Checkbox from './Checkbox';

const PassRequirements = (props) => {
  return(
    <div>
      <h3>Pass Requirements</h3>

      <Checkbox
        name="Discover Pass"
        inputName="discoverPass"
        value={props.parameters.discoverPass}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Northwest Forest Pass"
        inputName="northwestForestPass"
        value={props.parameters.northwestForestPass}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

    </div>
  );
}

export default PassRequirements;
