import missions from './misssions'
const SET_PROFILE = 'SET_PROFILE';

export const setUserProfile = (profile) => {
  return ({
    type: SET_PROFILE,
    payload: profile,
  })
};

const initialState = missions;

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PROFILE: {
      return { ...state, ...payload};
    }
    default:
      return state;
  }
}
