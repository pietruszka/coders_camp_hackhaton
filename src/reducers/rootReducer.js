const SET_PROFILE = 'SET_PROFILE';
import { CHECK_REWARD } from '../actions';

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
    case CHECK_REWARD: {
      let exp = state.exp;

      for (let i = 0; i < payload.length; i++) {
        if (payload[i].progress >= payload[i].goal) {
          exp = exp + payload[i].reward;
        }
      }
      console.log(exp);
      let newState = { ...state };
      newState.exp = exp;
      return { ...newState };
    }
    default:
      return state;
  }
}
