import { combineReducers } from 'redux';

import playlists from './playlists';

// ACTION TYPES
const GET_TOKEN = 'GET_TOKEN';

// ACTION CREATORS
export const getToken = accessToken => ({ type: GET_TOKEN, accessToken });

const accessToken = (state = '', action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.accessToken;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ accessToken, playlists });
export default rootReducer;
