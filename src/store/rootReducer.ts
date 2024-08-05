import { combineReducers } from '@reduxjs/toolkit';
import Namespace from './utils';
import userActivity from './userActivity/userActivity';
import serverData from './serverData/serverData';

const RootReducer = combineReducers({
  [Namespace.serverData] : serverData.reducer,
  [Namespace.userActivity] : userActivity.reducer
});

export default RootReducer;
