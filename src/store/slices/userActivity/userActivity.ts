import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../../utils/utils';
import { fetchOffers, fetchAddFavorite, fetchRemoveFavorite, fetchFavorites, fetchNearbyOffers, fetchComment } from '../../api-actions/api-actions';
import { CommentServerType, OffersArray, OfferType } from '../../../types/types';


type userActivityType = {
  chosenFilter: string;
  offers: OffersArray | null;
  chosenCity: string;
  favorites: OffersArray | null;
  chosenOffer: OfferType | null;
  userInfo: string | null;
  nearbyOffers: OffersArray | null;
  comments: CommentServerType[] | null;
};

const initialState : userActivityType = {
  chosenFilter: 'popular',
  offers: null,
  chosenCity: 'Amsterdam',
  favorites: null,
  chosenOffer: null,
  userInfo: null,
  nearbyOffers: null,
  comments: null
};

const userActivity = createSlice({
  name: Namespace.userActivity,
  initialState: initialState,
  reducers: {
    chooseCity: (state, action: {payload: string} ) => {
      state.chosenCity = action.payload;
    },
    chooseFilter: (state, action: {payload: string}) => {
      state.chosenFilter = action.payload;
    },
    chooseOffer: (state, action: {payload: OfferType}) => {
      state.chosenOffer = action.payload;
    },
    getUserInfo: (state, action: {payload: string}) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchAddFavorite.fulfilled, (state) => {
        state = {...state};
      })
      .addCase(fetchRemoveFavorite.fulfilled, (state) => {
        state = {...state};
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

export const {chooseCity, chooseFilter, chooseOffer, getUserInfo} = userActivity.actions;
export default userActivity;
