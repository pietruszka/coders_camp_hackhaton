const ADD_NEW_QUEST = 'ADD_NEW_QUEST';

export const addNewQuest = (mission) => {
  return ({
    type: ADD_NEW_QUEST,
    payload: mission,
  })
}
export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_NEW_QUEST: {
      console.log(action.payload);
      return [...state, action.payload];
    }
  }
  return state;
}
