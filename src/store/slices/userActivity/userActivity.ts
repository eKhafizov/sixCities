import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../../utils/utils';
import { fetchOffers } from '../../api-actions/api-actions';
import { OffersArray } from '../../../types/types';

type userActivityType = {
  filter: string;
  offers: OffersArray | null;
};

const initialState : userActivityType = {
  filter: 'all',
  offers: null,
};

const userActivity = createSlice({
  name: Namespace.userActivity,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  }
});

export default userActivity;
