import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { getToken } from '../reducers';

const styles = {
  App: {
    display: 'flex',
    flexDirection: 'row'
  },
  TallCard: {
    marginRight: '24px',
    flex: '1',
    position: 'relative'
  }
};

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

const MainWithAccessToStyleObject = withStyles(styles)(Main);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWithAccessToStyleObject);
