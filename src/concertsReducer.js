import * as actions from './actions';
const { FETCH_CONCERT_DATA, SET_FILTERED_CONCERTS } = actions;


const DEFAULT_STATE = {
  concertData: [],
  filteredConcerts: []
}

const setConcertData = (state, action) => {

  const newState = {}
  Object.assign(newState, state, {concertData: action.concertData})

  return newState
}

// const setConcertData = (state, action) => {
//   const newOMDBData = {}
//   Object.assign(newOMDBData, state.concertData, {'concerts': action.concertData})
//   console.log('all', newOMDBData)
//   const newState = {}
//   Object.assign(newState, state, {omdbData: newOMDBData})
//   return newState
// }

const setFilteredConcerts = (state = [], action) => {
  const newState = {}
  Object.assign(newState, state, {filteredConcerts: action.filteredConcertData})
  return newState
}
// const setConcertData = (state, action) => {
//
//   const newState = {}
//   Object.assign(newState, state, {concertData: action.concertData})
//
//   return newState
// }
//
// const setFilteredConcerts = (state = [], action) => {
//   const newState = {}
//   Object.assign(newState, state, {filteredConcerts: action.filteredConcertData})
//   return newState
// }


const concertsReducer =  (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CONCERT_DATA:
      return setConcertData(state, action)
    case SET_FILTERED_CONCERTS:
      return setFilteredConcerts(state, action)
    default:
      return state
  }
}

export default concertsReducer;
