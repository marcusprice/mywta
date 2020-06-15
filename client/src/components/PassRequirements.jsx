import React from 'react';
import Checkbox from './Checkbox';

const PassRequirements = ({
  parameters,       //search parameters
  setParameters     //function to set search parameters
}) => (
  <div>
    <h3>Pass Requirements</h3>

    <Checkbox
      name="Discover Pass"
      inputName="discoverPass"
      value={parameters.discoverPass}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="National Park Pass"
      inputName="nationalParkPass"
      value={parameters.nationalParkPass}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Northwest Forest Pass"
      inputName="northwestForestPass"
      value={parameters.northwestForestPass}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Oregon State Parks Day-Use"
      inputName="oregonStateParksDayUse"
      value={parameters.oregonStateParksDayUse}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Sno-Parks Permit"
      inputName="snoParksPermit"
      value={parameters.snoParksPermit}
      setParameters={setParameters}
      parameters={parameters} />

  </div>
)

export default PassRequirements;
