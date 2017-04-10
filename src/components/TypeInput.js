import React, { PropTypes } from 'react';

const TypeInput = ({ searchTerm, handleSearchInputChange }) => {
  return (
    <input
      name="typeAheadString"
      id="typeAheadString"
      type="text"
      className="typed-input"
      onChange={e => handleSearchInputChange(e)}
      placeholder="Band/SoundsLike/Venue"
      value={searchTerm}
    />
  );
};

TypeInput.propTypes = {
  searchTerm: PropTypes.string,
};

export default TypeInput;
