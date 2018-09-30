import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);
