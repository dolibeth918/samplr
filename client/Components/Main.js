import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

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
    console.log('tha props', this.props);
    return (
      <div id="main" className="row container">
        <h1>Hello from Spotify</h1>
        <a href="/login">Login with Spotify</a>
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
