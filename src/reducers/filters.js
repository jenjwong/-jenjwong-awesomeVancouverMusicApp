import * as actions from '../actions/actions';
import * as utils from './utils';

const { SET_SEARCH_TERM, SET_SEARCH_COST, SET_CONCERTS_COST_MIN, SET_CONCERTS_COST_MAX, IS_COST_SPECIFIED } = actions;
const { updateObject } = utils;

const DEFAULT_STATE = {
  searchTerm: '',
  concertsCostMin: 0,
  concertsCostMax: 100,
  searchCost: 0,
  isCostSpecified: false,
};

const setSearchTerm = (state, action) => updateObject(state, { searchTerm: action.searchTerm });

const setSearchCost = (state, action) => updateObject(state, { searchCost: action.searchCost });

const setConcertsCostMin = (state, action) => updateObject(state, { concertsCostMin: action.min });

const setConcertsCostMax = (state, action) => updateObject(state, { concertsCostMax: action.max });

const isCostSpecified = (state, action) => updateObject(state, { isCostSpecified: action.bool });

const filtersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case SET_SEARCH_COST:
      return setSearchCost(state, action);
    case SET_CONCERTS_COST_MIN:
      return setConcertsCostMin(state, action);
    case SET_CONCERTS_COST_MAX:
      return setConcertsCostMax(state, action);
    case IS_COST_SPECIFIED:
      return isCostSpecified(state, action);
    default:
      return state;
  }
};

export default filtersReducer;
