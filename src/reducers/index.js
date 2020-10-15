import { combineReducers } from 'redux';
import * as user from './user';
import * as header from './header';

export const rootReducer = combineReducers({
  user: user.reducer,
  header: header.reducer,
});
