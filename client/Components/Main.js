import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Button } from '@material-ui/core';

import { getToken } from '../reducers';

class Main extends Component {
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    if (parsed.access_token) {
      this.props.setToken(parsed.access_token);
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div id="main" className="row container">
        <h1>Hello from Spotify</h1>
        <Button color="primary" href="/login">
          Login with Spotify
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.accessToken
});

const mapDispatchToProps = dispatch => ({
  setToken: accessToken => {
    dispatch(getToken(accessToken));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
