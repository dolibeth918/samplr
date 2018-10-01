import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

import store from './store';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
