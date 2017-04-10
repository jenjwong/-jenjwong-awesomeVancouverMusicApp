import React, { PropTypes } from 'react';
import SimilarArtistsEntry from './SimilarArtistsEntry';

const SimilarArtistsList = ({ artists }) => (
  <div className="sounds-like-container">
    <span className="sounds-like">Sounds Like:</span>
    <div className="sounds-like-artist-container">
      {artists.map((artist, index, collection) => (
        <SimilarArtistsEntry
          key={index}
          artist={artist}
          index={index}
          collection={collection}
        />
          ))}
    </div>
  </div>
  );

SimilarArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.string),
};

export default SimilarArtistsList;
