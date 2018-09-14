import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import ItemsReducer from './reducer_items';
import ActiveItem from './reducers_active_item';

export default combineReducers({
  profile: rootReducer,
  items: ItemsReducer,
  activeItem: ActiveItem
});
