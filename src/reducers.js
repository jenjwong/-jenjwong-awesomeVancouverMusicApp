import { combineReducers } from 'redux'
import filters from './filterReducer'
import concerts from './concertsReducer'
import enableBatching from './enableBatchingReducer'

const rootReducer = combineReducers ({
  concerts,
  filters
})

// function enableBatching(reducer) {
//  return function batchingReducer(state, action) {
//    switch (action.type) {
//      case 'BATCH_ACTIONS':
//        return action.actions.reduce(reducer, state);
//      default:
//        return reducer(state, action);
//    }
//  }
// }

export default enableBatching(rootReducer)
