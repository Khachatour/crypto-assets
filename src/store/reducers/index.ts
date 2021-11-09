import { combineReducers } from 'redux';
import utilityReducers from './utils';
import assetsReducers from './assets'


const rootReducer = combineReducers({
  utils: utilityReducers,
  assets: assetsReducers
});

export default rootReducer;