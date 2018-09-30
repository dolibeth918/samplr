// ACTION TYPES
const GET_TOKEN = 'GET_TOKEN';

// INITIAL STATE
const initialState = {
  accessToken: ''
};

// ACTION CREATORS
export const getToken = accessToken => ({ type: GET_TOKEN, accessToken });

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return { accessToken: action.accessToken };
    default:
      return state;
  }
};

export default rootReducer;
