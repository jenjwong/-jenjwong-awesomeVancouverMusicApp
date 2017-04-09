import { FETCH_CONCERT_DATA, SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED, SET_FILTERED_CONCERTS, BATCH_ACTIONS } from './actions';
import {get, Schemas } from './utilities/api.js';
import _throttle from 'lodash/throttle';
import { sortByDate, findMinMax, filteredMatches } from './utilities/filterHelpers';

export const setConcertData = (concertData) => ({
  type: FETCH_CONCERT_DATA, concertData
})

export function fetchConcertData (url) {
  return function (dispatch) {
    get(url, (data, normalizedData) => {
        dispatch(setConcertData(normalizedData))
        dispatch(setConcertsCostMin(data.concerts))
        dispatch(setConcertsCostMax(data.concerts))
        dispatch(setSearchCost(findMinMax(data.concerts)[1]))
    }, Schemas.CONCERT)
  }
};

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM, searchTerm
})

export function setFilteredConcerts (filteredConcertData) {
  return { type: SET_FILTERED_CONCERTS, filteredConcertData }
}

export function batchActions(...actions) {
  return {
    type: BATCH_ACTIONS,
    actions: actions,
  };
}



export function handleSearch (searchTerm, costSearch) {
  return function (dispatch, getState) {
    const concerts = getState().concerts.concertsArray.map(key => getState().concerts.concertsDictionary[key])
    const filteredConcerts = filteredMatches(concerts, searchTerm, costSearch);

    batchActions(
      dispatch(setSearchTerm(searchTerm)),
      dispatch(setFilteredConcerts(filteredConcerts.map(concert => concert.id)))
    )
    if (costSearch !== undefined) {
      dispatch(setSearchCost(costSearch))
    }
    if (searchTerm !== '') {
      batchActions(
        dispatch(setConcertsCostMin(filteredConcerts)),
        dispatch(setConcertsCostMax(filteredConcerts))
      )
    }
  }
}

export function setSearchCost (searchCost) {
  return { type: SET_SEARCH_COST, searchCost }
}

export function setConcertsCostMin (concerts) {
  const min = findMinMax(concerts)[0]
  return { type: SET_CONCERTS_COST_MIN, min }
}

export function setConcertsCostMax (concerts) {
  const max = findMinMax(concerts)[1]
  return { type: SET_CONCERTS_COST_MAX, max }
}
export function isCostSpecified (bool) {
  return { type: IS_COST_SPECIFIED, bool }
}
