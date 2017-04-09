import * as actions from './actions';
const { FETCH_CONCERT_DATA, SET_FILTERED_CONCERTS } = actions;

import { normalize, schema } from 'normalizr';


const myData = { concerts: [ { id: 1 }, { id: 2 } ] };
const concert = new schema.Entity('concerts');
const mySchema = { concerts: [ concert ] }
// const normalizedData = normalize(myData, mySchema);



const DEFAULT_STATE = {
  concertsDictionary: [],
  filteredConcertsArray: [],
  concertsArray: [],
}

// should filtered set data go here?
const setConcertData = (state, action) => {
  const newState = {}
  const normalizedData = normalize(action.concertData, mySchema);
  Object.assign(newState, state, {concertsDictionary: normalizedData.entities.concerts, concertsArray: normalizedData.result.concerts, filteredConcertsArray: normalizedData.result.concerts })
  return newState
}

const setFilteredConcerts = (state = [], action) => {
  const newState = {}
  Object.assign(newState, state, {filteredConcertsArray: action.filteredConcertData})
  return newState
}

const concertsReducer =  (state = DEFAULT_STATE, action) => {
  console.log('concerts reducer', action.type)
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
