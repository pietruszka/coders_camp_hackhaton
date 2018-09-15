const SET_PROFILE = 'SET_PROFILE';

export const setUserProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};

const initialState = {
  Level: 1,
  EXP: 0,
  EXPneeded: 10,
  Points: 5,
  HP: 10,
  HPmax: 10,
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
