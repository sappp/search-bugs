import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'

import searchReducer from './search';
import testerReducer from './tester';

const reducers = combineReducers({
  search: searchReducer,
  tester: testerReducer,
})

const middleWares = applyMiddleware(
  thunkMiddleware,
  logger
)

export default (initialState) => createStore(reducers, initialState, middleWares);
