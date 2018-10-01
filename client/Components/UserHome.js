import React, { Component } from 'react';
import { connect } from 'react-redux';
import Playlists from './Playlists';

import { fetchPlaylists } from '../reducers/playlists';

class UserHome extends Component {
  componentDidMount() {
    this.props.fetchPlaylists(this.props.accessToken);
  }
  render() {
    return (
      <div>
        <h1>Welcome User!</h1>
        <Playlists />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.accessToken,
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: accessToken => {
    dispatch(fetchPlaylists(accessToken));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
