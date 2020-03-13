import React from 'react';
import Checkbox from './Checkbox';

const PassRequirements = () => {
  return(
    <div>
      <h3>Pass Requirements</h3>

      <Checkbox
        name="Discover Pass"
        inputName="coast"
        value={true}
      />

      <Checkbox
        name="Northwest Forest Pass"
        inputName="coast"
        value={true}
      />

    </div>
  );
}

export default PassRequirements;
