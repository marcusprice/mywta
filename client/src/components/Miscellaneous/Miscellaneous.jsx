import React from 'react';
import Checkbox from '../Checkbox/';

const Miscellaneous = ({
  parameters,       //search parameters
  setParameters     //function to set search parameters
}) => (
  <div>
    <h3>Miscellaneous</h3>

    <Checkbox
      name="Kid Friendly"
      inputName="kidFriendly"
      value={parameters.kidFriendly}
      setParameters={setParameters}
      parameters={parameters} />

    <Checkbox
      name="Dog Friendly"
      inputName="dogFriendly"
      value={parameters.dogFriendly}
      setParameters={setParameters}
      parameters={parameters} />

  </div>
)

export default Miscellaneous;
