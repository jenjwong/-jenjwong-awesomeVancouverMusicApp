import React, { PropTypes } from 'react';
import * as utils from '../utilities/utils';

const { isSmallScreen } = utils;

const PriceRangeInput = ({ min, max, searchCost, handleCostRangeInputChange }) => {
  if (isSmallScreen()) {
    return (
      <input
        name="searchedCost"
        type="range"
        className="cost-input"
        onTouchEnd={e => handleCostRangeInputChange(e)}
        onTouchStart={e => handleCostRangeInputChange(e)}
        onMouseUp={e => handleCostRangeInputChange(e)}
        min={min}
        max={max}
      />
    );
  }
  return (
    <input
      name="searchedCost"
      type="range"
      value={searchCost}
      className="cost-input"
      onChange={e => handleCostRangeInputChange(e)}
      onMouseUp={e => handleCostRangeInputChange(e)}
      min={min}
      max={max}
    />
  );
};

PriceRangeInput.propTypes = {
  min: PropTypes.num,
  max: PropTypes.num,
  searchCost: PropTypes.num,
};

export default PriceRangeInput;
