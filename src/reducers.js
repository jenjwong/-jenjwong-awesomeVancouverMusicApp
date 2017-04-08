import { combineReducers } from 'redux'
import filters from './filterReducer'
import concerts from './concertsReducer'

export default combineReducers({
  concerts,
  filters
})
