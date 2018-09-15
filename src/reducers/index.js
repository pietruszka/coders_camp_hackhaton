import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import missionList from './missionList';
import questList from './QuestListRed';
export default combineReducers({
  profile: rootReducer,
  mission: missionList,
  questList: questList,
});
