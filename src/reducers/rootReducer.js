const SET_PROFILE = 'SET_PROFILE';

export const setUserProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};

const initialState = {
  name: 'NameXYZ',
  mana: 100,
  exp: 50,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PROFILE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
