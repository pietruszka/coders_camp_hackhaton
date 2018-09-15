import questions from './questions';
const SET_PROFILE = 'SET_PR2OFILE';

const initialState = questions;

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PROFILE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
