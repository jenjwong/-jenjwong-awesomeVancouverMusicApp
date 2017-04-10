import * as actions from '../actions/actions';
import * as utils from './utils';

const { FETCH_CONCERT_DATA, SET_FILTERED_CONCERTS } = actions;
const { updateObject } = utils;

const DEFAULT_STATE = {
  concertsDictionary: [],
  filteredConcertsArray: [],
  concertsArray: [],
};

const setConcertData = (state, action) => {
  const normalized = action.concertData;
  return updateObject(state,
    { concertsDictionary: normalized.entities.concerts,
      concertsArray: normalized.result.concerts,
      filteredConcertsArray: normalized.result.concerts,
    }
  );
};

const setFilteredConcerts = (state, action) => {
  return updateObject(state, { filteredConcertsArray: action.filteredConcertData });
};

const concertsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CONCERT_DATA:
      return setConcertData(state, action);
    case SET_FILTERED_CONCERTS:
      return setFilteredConcerts(state, action);
    default:
      return state;
  }
};

export default concertsReducer;
