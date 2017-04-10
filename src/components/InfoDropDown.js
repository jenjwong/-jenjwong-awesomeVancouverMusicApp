import React, { PropTypes } from 'react';
import VideoList from './VideoList';

const InfoDropDown = ({ artistSummary, photo, youTube, toggled, slideAnimation, id }) => {
  let isShown;
  toggled ? isShown = 'show' : isShown = 'hide';
  return (
    <div className="dropdown-container">
      <div className={slideAnimation} >
        <div className={isShown}>
          <div className="artist-summary-container">
            <div className="artist-summary">
              <p>{artistSummary}</p>
            </div>
          </div>
          <VideoList
            photo={photo}
            youTube={youTube}
            isRendered={toggled}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

InfoDropDown.propTypes = {
  artistSummary: PropTypes.string,
  photo: PropTypes.string,
  youTube: PropTypes.arrayOf(PropTypes.string),
  toggled: PropTypes.bool,
  slideAnimation: PropTypes.string,
  id: PropTypes.string,
};

export default InfoDropDown;
