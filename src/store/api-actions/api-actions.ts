import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../types/types';
import { AppDispatch } from '../types/types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../utils/apiRoutes';
import { OffersArray } from '../../types/types';
import { saveToken } from '../../utils/token';

export const fetchOffers = createAsyncThunk<
  OffersArray,
  undefined,
{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/getOffers',
  async ( _arg, { extra: api}) => {
    const {data} = await api.get<OffersArray>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
> ('data/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);


export type UserData = {
  id: number;
  email: string;
  token: string;
};
export type Login = {
  login: string;
  password: string;
}
export const loginAuth = createAsyncThunk<
  void,
  Login,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'server/login',
  async ( {login: email, password} , {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(checkAuthAction());
  }
);
