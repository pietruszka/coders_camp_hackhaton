import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import courseReducer from './courseReducer';

export default combineReducers({
  profile: rootReducer,
  course: courseReducer,
});
