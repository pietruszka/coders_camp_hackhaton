export function selectItem(item) {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
}
export const QUEST_COMPLETE = 'QUEST_COMPLETE';
export const CHECK_REWARD = 'CHECK_REWARD';
export const completeQuest = mission => {
  // console.log('MISSION COMP');
  return {
    type: QUEST_COMPLETE,
    payload: mission,
  };
};

export const checkReward = mission => {
  // console.log('MISSION CHECK');
  // console.log(mission);
  return {
    type: CHECK_REWARD,
    payload: mission,
  };
};
