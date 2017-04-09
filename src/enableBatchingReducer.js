import * as actions from './actions';
const { BATCH_ACTIONS } = actions;

function enableBatching(reducer) {
 return function batchingReducer(state, action) {
   switch (action.type) {
     case BATCH_ACTIONS:
       return action.actions.reduce(reducer, state);
     default:
       return reducer(state, action);
   }
 }
};

export default enableBatching;
