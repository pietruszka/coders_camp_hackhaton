import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import missionList from './missionList';
import questList from './QuestList';
export default combineReducers({
  profile: rootReducer,
  mission: missionList,
  questList: questList,
});
