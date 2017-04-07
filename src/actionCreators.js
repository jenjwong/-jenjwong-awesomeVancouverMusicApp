import { FETCH_CONCERT_DATA, SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED, SET_FILTERED_CONCERTS } from './actions';
import get from './utilities/axiosHelpers.js';
import { sortByDate, findMinMax, filteredMatches } from './utilities/filterHelpers';

export const setConcertData = (concertData) => ({
  type: FETCH_CONCERT_DATA, concertData
})

export function fetchConcertData (url) {
  return function (dispatch) {
    get(url, (data) => {
        dispatch(setConcertData(sortByDate(data)))
        dispatch(setConcertsCostMin(data))
        dispatch(setConcertsCostMax(data))
        dispatch(setSearchCost(findMinMax(data)[1]))
        dispatch(setFilteredConcerts(sortByDate(data)))
    })
  }
};

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM, searchTerm
})

export function setFilteredConcerts (filteredConcertData) {
  return { type: SET_FILTERED_CONCERTS, filteredConcertData }
}

export function handleSearch (searchTerm, costSearch) {
  return function (dispatch, getState) {
    dispatch(setSearchTerm(searchTerm))
    dispatch(setFilteredConcerts(filteredMatches(getState().concertData, searchTerm, costSearch)))
    if (searchTerm !== '') {
      dispatch(setConcertsCostMin(getState().filteredConcerts))
      dispatch(setConcertsCostMax(getState().filteredConcerts))
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
