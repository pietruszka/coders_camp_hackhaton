const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';
const KICK_USER = 'KICK_USER';

export const addTeamUser = (name) => {
  return {
    type: ADD_TEAM_MEMBER,
    payload: {
      name,
      email: `${Math.random().toString()}@wp.pl`,
      kicked: false,
    }
  }
}

export const kickTeamUser = (name) => {
  return {
    type: KICK_USER,
    payload: name,
  }
};

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TEAM_MEMBER: {
      if(!state.find(e => e.name === payload.name)) return [...state, payload];

      return state
    }
    case KICK_USER: {
      const newList = state.map(e => {
        if(e.name === payload) {
          e.kicked = true;
        }

        return e;
      })

      return [...newList];
    }
    default:
      return state;
  }
}
