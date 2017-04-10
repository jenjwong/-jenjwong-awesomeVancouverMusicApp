import { get, Schemas } from '../utilities/api';
import { findMinMax, filteredMatches } from '../utilities/filterHelpers';
import {
  FETCH_CONCERT_DATA,
  SET_SEARCH_TERM,
  SET_SEARCH_COST,
  SET_CONCERTS_COST_MIN,
  SET_CONCERTS_COST_MAX,
  IS_COST_SPECIFIED,
  SET_FILTERED_CONCERTS,
  BATCH_ACTIONS } from './actions';

const batchActions = (...actions) => ({
  type: BATCH_ACTIONS, actions,
});

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM, searchTerm,
});

export const setFilteredConcerts = filteredConcertData => ({
  type: SET_FILTERED_CONCERTS, filteredConcertData,
});

export const setSearchCost = searchCost => ({
  type: SET_SEARCH_COST, searchCost,
});

export const setConcertsCostMin = (concerts) => {
  const min = findMinMax(concerts)[0];
  return { type: SET_CONCERTS_COST_MIN, min };
};

export const setConcertsCostMax = (concerts) => {
  const max = findMinMax(concerts)[1];
  return { type: SET_CONCERTS_COST_MAX, max };
};

export const isCostSpecified = bool => ({
  type: IS_COST_SPECIFIED, bool,
});

export const handleSearch = (searchTerm, costSearch) => {
  return (dispatch, getState) => {
    const concerts = getState().concerts.concertsArray.map((key) => {
      return getState().concerts.concertsDictionary[key];
    });
    const filteredConcerts = filteredMatches(concerts, searchTerm, costSearch);
    batchActions(
      dispatch(setSearchTerm(searchTerm)),
      dispatch(setFilteredConcerts(filteredConcerts.map(concert => concert.id))),
    );
    if (costSearch !== undefined) {
      dispatch(setSearchCost(costSearch));
    }
    if (searchTerm !== '') {
      batchActions(
        dispatch(setConcertsCostMin(filteredConcerts)),
        dispatch(setConcertsCostMax(filteredConcerts)),
      );
    }
  };
};

export const setConcertData = concertData => ({
  type: FETCH_CONCERT_DATA, concertData,
});

export const fetchConcertData = (url) => {
  return (dispatch) => {
    get(url, (data, normalizedData) => {
      batchActions(
        dispatch(setConcertData(normalizedData)),
        dispatch(setConcertsCostMin(data.concerts)),
        dispatch(setConcertsCostMax(data.concerts)),
        dispatch(setSearchCost(findMinMax(data.concerts)[1])),
      );
    }, Schemas.CONCERT);
  };
};
