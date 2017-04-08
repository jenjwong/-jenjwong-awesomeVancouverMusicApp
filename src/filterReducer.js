import * as actions from './actions';
const { SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED } = actions;

const DEFAULT_STATE = {
  searchTerm: '',
  concertsCostMin: 0,
  concertsCostMax: 100,
  searchCost: 0,
  isCostSpecified: false,
}

// function updateObject(oldObject, newValues) {
//     // Encapsulate the idea of passing a new object as the first parameter
//     // to Object.assign to ensure we correctly copy data instead of mutating
//     return Object.assign({}, oldObject, newValues);
// }



// const setConcertData = (state = [], action) => {
//   return updateObject(state, action);
// }
// const setConcertData = (state, action) => {
//   const newState = {}
//   Object.assign(newState, state, {concertData: action.concertData})
//   return newState
// }

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


const filtersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
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

export default filtersReducer;
