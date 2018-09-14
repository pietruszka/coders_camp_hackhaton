import { combineReducers } from 'redux';
import rootReducer from './rootReducer';

export default combineReducers({
  profile: rootReducer,
});
