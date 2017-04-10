import React, { PropTypes } from 'react';
import EventsListEntry from './EventsListEntry';

const EventsList = ({ concerts }) => {
  return (
    <div className="events-list">
      <ul>
        {concerts && Object.keys(concerts).map(concert =>
          <EventsListEntry
            key={concerts[concert].id}
            id={concerts[concert].id}
            titles={concerts[concert].title}
            ticketLink={concerts[concert].link}
            date={concerts[concert].date}
            venue={concerts[concert].venue}
            cost={concerts[concert].cost}
            photo={concerts[concert].photo}
            startTime={concerts[concert].startTime}
            youTube={concerts[concert].youTube}
            similarArtists={concerts[concert].similarArtists}
            artistSummary={concerts[concert].artistSummary}
          />,
        )}
      </ul>
    </div>
  );
};

EventsList.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
};

export default EventsList;
