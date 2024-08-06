import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../../utils/utils';
import { AuthStatus } from '../../utils/utils';
import {checkAuthAction, loginAuth} from '../../api-actions/api-actions';

type serverDataType = {
  authorized: string;
};

const initialState : serverDataType = {
  authorized: AuthStatus.NO_AUTH
};

const serverData = createSlice({
  name: Namespace.serverData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state = {...state};
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.authorized = AuthStatus.AUTH;
      });
  }
});

export default serverData;
