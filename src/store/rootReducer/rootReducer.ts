import { combineReducers } from '@reduxjs/toolkit';
import Namespace from '../utils/utils';
import userActivity from '../slices/userActivity/userActivity';
import serverData from '../slices/serverData/serverData';
import { sixSitiesApi } from '../../features/apiSlice';

const RootReducer = combineReducers({
  [Namespace.serverData] : serverData.reducer,
  [Namespace.userActivity] : userActivity.reducer,
  //added rtk-query auto-generated reducer
  [sixSitiesApi.reducerPath] : sixSitiesApi.reducer,
});

export default RootReducer;
