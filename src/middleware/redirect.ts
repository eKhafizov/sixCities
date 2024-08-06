import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../history/browserHistory';
import RootReducer from '../store/rootReducer/rootReducer';

export type Reducer = ReturnType<typeof RootReducer>;

const redirect : Middleware<unknown, Reducer> = () => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'navigation/redirect') {
    browserHistory.push(action.payload);
  }
  return next(action);
};
export default redirect;
