import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import courseReducer from './courseReducer';
import teamReducer from './teamReducer';

export default combineReducers({
  profile: rootReducer,
  course: courseReducer,
  team: teamReducer,
});
