import { configureStore } from '@reduxjs/toolkit';
import redirect from '../../middleware/redirect';
import createApi from '../api/api';
import RootReducer from '../rootReducer/rootReducer';
import { sixSitiesApi } from '../../features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const api = createApi();

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api}
    //added auto-generated rtk-query middleware
    }).concat(redirect, sixSitiesApi.middleware)
});


// optional, but required for refetchOnFocus/refetchOnReconnect behaviors // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
