import { combineReducers } from 'redux';
import filters from './filters';
import concerts from './concerts';
import { enableBatching } from './utils';

const rootReducer = combineReducers({
  concerts,
  filters,
});

export default enableBatching(rootReducer);
