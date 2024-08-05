import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../utils';
import { AuthStatus } from '../utils';

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
  extraReducers: {}
});

export default serverData;
