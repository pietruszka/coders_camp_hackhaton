import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import missionList from './missionList';
export default combineReducers({
  profile: rootReducer,
  mission: missionList,
});
