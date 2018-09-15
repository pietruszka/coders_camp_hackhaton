export function selectItem(item) {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
}
const QUEST_COMPLETE = 'QUEST_COMPLETE';
export const completeQuest = mission => {
  console.log('MISSION COMP');
  return {
    type: QUEST_COMPLETE,
    payload: mission.reward,
  };
};
