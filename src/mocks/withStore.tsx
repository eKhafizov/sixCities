import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { RootState } from '../types/state';
import createApi from '../services/api';
import thunk from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { MockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';


export type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(component: JSX.Element, initialState: Partial<RootState> = {}) : ComponentWithMockStore {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middlewares = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
  RootState,
  Action<string>,
  ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>>(middlewares);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}
