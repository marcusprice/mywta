import React from 'react';
import Checkbox from './Checkbox';

const Miscellaneous = () => {
  return(
    <div>
      <h3>Miscellaneous</h3>

      <Checkbox
        name="Kid Friendly"
        inputName="kidFriendly"
        value={false}
      />

      <Checkbox
        name="Dog Friendly"
        inputName="dogFriendly"
        value={false}
      />

    </div>
  );
}

export default Miscellaneous;
