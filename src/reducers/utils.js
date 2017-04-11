import * as actions from '../actions/actions';

const { BATCH_ACTIONS } = actions;

export const enableBatching = (reducer) => {
  return function batchingReducer(state, action) {
    switch (action.type) {
      case BATCH_ACTIONS:
        return action.actions.reduce(reducer, state);
      default:
        return reducer(state, action);
    }
  };
};

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};
