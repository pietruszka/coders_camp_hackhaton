import { QUEST_COMPLETE } from '../actions';
const ADD_NEW_QUEST = 'ADD_NEW_QUEST';
const ADD_QUEST_PROGRESS = 'ADD_QUEST_PROGRESS';
const KILL_QUEST = 'KILL_QUEST';
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
export const killQuest = mission => {
  console.log('KILLQUEST');
  return {
    type: KILL_QUEST,
    payload: mission,
  };
};
export default function(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case ADD_NEW_QUEST: {
      //   console.log(action.payload);
      return [...state, action.payload];
    }
    case ADD_QUEST_PROGRESS: {
      let temp = state.map(item => {
        item.progress = ++item.progress;
        return item;
      });

      return temp;
    }
    case QUEST_COMPLETE: {
      console.log('REWARD CHECKING');
      return state;
    }
    case KILL_QUEST: {
      console.log('TEST KILL_QUEST');

      let mission = action.payload;
      const filtredMissionList = mission.filter(({ progress, goal }) => progress < goal);

      return filtredMissionList;
    }
    default: {
      return state;
    }
  }
}

function deleteMission(mission, state) {
  let missionIndex = state.indexOf(mission);
  let tempState = state.filter((item, index) => {
    return missionIndex != index;
  });
  return tempState;
}
