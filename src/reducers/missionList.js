import store from '../store';
import { completeQuest } from '../actions';
const ADD_NEW_QUEST = 'ADD_NEW_QUEST';
const ADD_QUEST_PROGRESS = 'ADD_QUEST_PROGRESS';

export const addNewQuest = mission => {
  return {
    type: ADD_NEW_QUEST,
    payload: mission,
  };
};
export const addQuestProgress = () => {
  return {
    type: ADD_QUEST_PROGRESS,
  };
};

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_QUEST: {
      //   console.log(action.payload);
      return [...state, action.payload];
    }
    case ADD_QUEST_PROGRESS: {
      let temp = state.map(item => {
        item.progress = ++item.progress;
        if (item.progress == item.goal) store.dispatch(completeQuest(item));
        return item;
      });
      return temp;
    }
  }
  return state;
}
