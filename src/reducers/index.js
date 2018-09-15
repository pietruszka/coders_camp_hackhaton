import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import missionList from './missionList';
import questList from './QuestListRed';
import ItemsReducer from './reducer_items';
import ActiveItem from './reducers_active_item';

export default combineReducers({
  profile: rootReducer,
  mission: missionList,
  questList: questList,
  items: ItemsReducer,
  activeItem: ActiveItem,
});
