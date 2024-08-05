import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../utils';

type userActivityType = {
  filter: string;
};

const initialState : userActivityType = {
  filter: 'all'
};

const userActivity = createSlice({
  name: Namespace.userActivity,
  initialState: initialState,
  reducers: {},
  extraReducers: {}
});

export default userActivity;
