import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { RootState } from '../types/state';
import createApi from '../services/api';
import thunk from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import HistoryRouter from '../history-route';
import { MemoryHistory, createMemoryHistory } from 'history';

export type ComponentWithMockStore = JSX.Element

export default function withWrapper(
  component: JSX.Element,
  initialState: Partial<RootState> = {},
  history?: MemoryHistory
) : ComponentWithMockStore {
  const memoryHistory = history ?? createMemoryHistory();
  const axios = createApi();
  const middlewares = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
  RootState,
  Action<string>,
  ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>>(middlewares);
  const mockStore = mockStoreCreator(initialState);

  return (
    <Provider
      store={mockStore}
    >
      <HistoryRouter
        history={memoryHistory}
      >
        {component}
      </HistoryRouter>
    </Provider>);
}
