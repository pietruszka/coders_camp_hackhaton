import questions from './questions'
const SET_PROFILE = 'SET_PR2OFILE';

const initialState = [
  {
    name: 'Jan Kowalski',
  },
  {
    name: 'Adrian Nowak',
  },
  {
    name: 'Jan Kowalski',
  },
  {
    name: 'Adrian Nowak',
  },
  {
    name: 'Jan Kowalski',
  },
  {
    name: 'Adrian Nowak',
  }
];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PROFILE: {
      return { ...state, ...payload};
    }
    default:
      return state;
  }
}
