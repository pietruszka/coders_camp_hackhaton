import questions from './questions'
const SET_PROFILE = 'SET_PR2OFILE';

const initialState = [
  {
    name: 'Jan Kowalski',
    email: 'a-email@example.com',
  },
  {
    name: 'Adrian Nowak',
    email: 'a-emawqeqweqwil@example.com',
  },
  {
    name: 'Jan Kowalski',
    email: 'a-emawqeqweqwil@exawqeqweweqmple.com',
  },
  {
    name: 'Adrian Nowak',
    email: 'a-emfsdsdfeqwil@exawqeqweweqmple.com',
  },
  {
    name: 'Jan Kowalski',
    email: 'a-emawqeqweqwil@ex23132mple.com',
  },
  {
    name: 'Adrian Nowak',
    email: 'a-emawqeqweqwil@exawdfsle.com',
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
