import React, { Component } from 'react';
import queryString from 'query-string';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: ''
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    if (parsed.access_token) {
      this.setState({ accessToken: parsed.access_token });
      this.props.history.push('/home');
    }
  }

  componentWillUnmount() {
    this.setState({ accessToken: '' });
  }

  render() {
    return (
      <div id="main" className="row container">
        <h1>Hello from Spotify</h1>
        <a href="/login">Login with Spotify</a>
      </div>
    );
  }
}