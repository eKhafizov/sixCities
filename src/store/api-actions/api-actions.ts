import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../types/types';
import { AppDispatch } from '../types/types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../utils/apiRoutes';
import { OffersArray } from '../../types/types';
import { dropToken, saveToken } from '../../utils/token';
import { ServerResponse } from 'http';
import { getUserInfo } from '../slices/userActivity/userActivity';
import { AppRoutes } from '../../utils/appRoutes';
import { redirectAction } from '../actions/actions';


export const fetchFavorites = createAsyncThunk<
  OffersArray,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'fetch/getFavorite',
  async ( _arg, {extra: api}) => {
    const {data} = await api.get<OffersArray>(`${APIRoute.Favourite}`);
    return data;
  }
);

export const fetchAddFavorite = createAsyncThunk<
  ServerResponse,
  {offerId: number},
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'fetch/addFavorite',
  async ( {offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/1`);
    dispatch(fetchFavorites());
    return data;
  }
);

export const fetchRemoveFavorite = createAsyncThunk<
  ServerResponse,
  {offerId: number},
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'fetch/removeFavorite',
  async ( {offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/0`);
    dispatch(fetchFavorites());
    return data;
  }
);

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
    dispatch(getUserInfo(email));
    dispatch(fetchFavorites());
    dispatch(redirectAction(AppRoutes.MAIN));
  }
);
export const logoutAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'server/logout',
  async ( _arg , {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectAction(AppRoutes.MAIN));
  }
);

export const fetchNearbyOffers = createAsyncThunk<
  OffersArray,
  {offerId: number},
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/getNearby',
  async ( {offerId}, {extra: api} ) => {
    const {data} = await api.get<OffersArray>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

/*
const {data} = await api.get<OffersArrayType>(`${APIRoute.Offers}/${offerId}/nearby`);
const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment, rating});
*/
