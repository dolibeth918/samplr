import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHome extends Component {
  componentDidMount() {}
  render() {
    return <h1>Welcome User!</h1>;
  }
}

const mapStateToProps = state => ({
  accessToken: state.accessToken
});

export default connect(mapStateToProps)(UserHome);
