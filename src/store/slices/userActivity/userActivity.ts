import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../../utils/utils';
import { fetchOffers } from '../../api-actions/api-actions';
import { OffersArray } from '../../../types/types';

type userActivityType = {
  chosenFilter: string;
  offers: OffersArray | null;
  chosenCity: string | null;
};

const initialState : userActivityType = {
  chosenFilter: 'popular',
  offers: null,
  chosenCity: 'Amsterdam'
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
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  }
});

export const {chooseCity, chooseFilter} = userActivity.actions;
export default userActivity;
