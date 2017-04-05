import { FETCH_CONCERT_DATA, SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  concertData: [],
  concertsCostMin: 0,
  concertsCostMax: 100,
  searchCost: 0,
  isCostSpecified: false,
}



const getConcertData = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {concertData: action.concertData})
  return newState
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const setSearchCost = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchCost: action.searchCost})
  return newState
}

const setConcertsCostMin = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {concertsCostMin: action.min})
  return newState
}

const setConcertsCostMax = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {concertsCostMax: action.max})
  return newState
}
const isCostSpecified = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {isCostSpecified: action.bool})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CONCERT_DATA:
    return getConcertData(state, action)
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case SET_SEARCH_COST:
      return setSearchCost(state, action)
    case SET_CONCERTS_COST_MIN:
      return setConcertsCostMin(state, action)
    case SET_CONCERTS_COST_MAX:
      return setConcertsCostMax(state, action)
    case IS_COST_SPECIFIED:
      return isCostSpecified(state, action)
    default:
      return state
  }
}

export default rootReducer
