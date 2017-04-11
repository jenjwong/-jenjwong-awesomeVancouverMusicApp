import React, { PropTypes } from 'react';
import VideoEntry from './VideoEntry';

const VideoList = ({ youTube, photo, isRendered }) => (
  <ul>
    {youTube.map((video, index) => (
      <VideoEntry
        videoId={video}
        index={index}
        thumbnail={photo}
        isRendered={isRendered}
        key={video}
      />
        ))}
  </ul>
  );

VideoList.propTypes = {
  youTube: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.string,
  isRendered: PropTypes.bool,
};

export default VideoList;
