import { combineReducers } from 'redux';
import utilityReducers from './utils';


const rootReducer = combineReducers({
  utils: utilityReducers,
});

export default rootReducer;