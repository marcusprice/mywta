import React from 'react';
import Checkbox from './Checkbox';

const Miscellaneous = (props) => {
  return(
    <div>
      <h3>Miscellaneous</h3>

      <Checkbox
        name="Kid Friendly"
        inputName="kidFriendly"
        value={props.parameters.kidFriendly}
      />

      <Checkbox
        name="Dog Friendly"
        inputName="dogFriendly"
        value={props.parameters.dogFriendly}
      />

    </div>
  );
}

export default Miscellaneous;
