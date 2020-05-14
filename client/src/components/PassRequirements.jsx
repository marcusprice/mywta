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
        name="National Park Pass"
        inputName="nationalParkPass"
        value={props.parameters.nationalParkPass}
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

      <Checkbox
        name="Oregon State Parks Day-Use"
        inputName="oregonStateParksDayUse"
        value={props.parameters.oregonStateParksDayUse}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

      <Checkbox
        name="Sno-Parks Permit"
        inputName="snoParksPermit"
        value={props.parameters.snoParksPermit}
        setParameters={props.setParameters}
        parameters={props.parameters}
      />

    </div>
  );
}

export default PassRequirements;
