import axios from 'axios';

// ACTION TYPES
const GET_PLAYLISTS = 'GET_PLAYLISTS';

// ACTION CREATORS
const getPlaylists = playlists => ({ type: GET_PLAYLISTS, playlists });

// INITIAL STATE
const playlists = [];

export const fetchPlaylists = accessToken => dispatch => {
  axios
    .get(`https://api.spotify.com/v1/me/playlists`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => res.data.items)
    .then(playlists => dispatch(getPlaylists(playlists)));
};

// PLAYLISTS REDUCER
const playlistReducer = (state = playlists, action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default playlistReducer;
