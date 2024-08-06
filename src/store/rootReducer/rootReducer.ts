import { combineReducers } from '@reduxjs/toolkit';
import Namespace from '../utils/utils';
import userActivity from '../slices/userActivity/userActivity';
import serverData from '../slices/serverData/serverData';

const RootReducer = combineReducers({
  [Namespace.serverData] : serverData.reducer,
  [Namespace.userActivity] : userActivity.reducer
});

export default RootReducer;
