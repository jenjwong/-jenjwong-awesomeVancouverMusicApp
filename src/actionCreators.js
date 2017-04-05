import { FETCH_CONCERT_DATA, SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED } from './actions';
import get from './utilities/axiosHelpers.js';
import { sortByDate, findMinMax } from './utilities/filterHelpers';

export function getConcertData (whatIsThisParam, concertData) {
  return { type: FETCH_CONCERT_DATA, whatIsThisParam, concertData }
}

// where should I set min and max? arguable everytime I fetch i would need recalc
export function fetchConcertData (url) {
  return function (dispatch, getState) {
    get(url, (data) => {
        dispatch(getConcertData('concertData', sortByDate(data)))
        dispatch(setConcertsCostMin(data))
        dispatch(setConcertsCostMax(data))
        dispatch(setSearchCost(findMinMax(data)[1]))
    })
  }
};

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
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
