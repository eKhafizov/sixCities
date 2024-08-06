import { configureStore } from '@reduxjs/toolkit';
import redirect from '../../middleware/redirect';
import createApi from '../api/api';
import RootReducer from '../rootReducer/rootReducer';

const api = createApi();

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api}
    }).concat(redirect)
});

export default store;
