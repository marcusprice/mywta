import React from 'react';
import DualRangeSlider from './DualRangeSlider';

const Search = () => {
  return(
    <div className="content-section">
      <h2>Search for Hikes</h2>
      <p>Use the form below to search for hikes.</p>
      <h3>Hike Range Parameters</h3>

      <DualRangeSlider
        title="Length"
        name="length"
        unit="Miles"
        min="0"
        max="50"
        step="1"
        minValue={0}
        maxValue={60}
      />

      <DualRangeSlider
        title="Elevation"
        name="elevation"
        unit="Feet"
        min="0"
        max="10000"
        step="1"
        minValue={0}
        maxValue={8000}
      />

      <DualRangeSlider
        title="Elevation Gain"
        name="elevationGain"
        unit="Feet"
        min="0"
        max="10000"
        step="1"
        minValue={0}
        maxValue={2000}
      />
    </div>
  )
}

export default Search;
