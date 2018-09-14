const SET_PROFILE = 'SET_PROFILE';

export const setUserProfile = (profile) => {
  return ({
    type: SET_PROFILE,
    payload: profile,
  })
};

const initialState = {
  Level: 10,
  EXP: 150,
  EXPneeded: 200,
  Points: 5,
  HP: 70,
  HPmax: 100,
  Strength: 5,
  Agility: 5,
  Luck: 5,
  Intelligence: 5,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_PROFILE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
