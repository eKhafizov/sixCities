import { createSelector } from '@reduxjs/toolkit';
import { OffersArray, OfferType } from '../../../types/types';
import { RootState } from '../../types/types';
import Namespace from '../../utils/utils';


export const getOffers = (state: Pick<RootState, Namespace.userActivity>) : OffersArray | null => state.USER_ACTIVITY.offers;
export const getFavorites = (state: Pick<RootState, Namespace.userActivity>) : OffersArray | null => state.USER_ACTIVITY.favorites;
export const getChosenOffer = (state: Pick<RootState, Namespace.userActivity>) : OfferType | null => state.USER_ACTIVITY.chosenOffer;

export const isChosenFavorite = createSelector(
  [getFavorites, getChosenOffer],
  (favorites, chosenOffer) => {
    const isFavorite = chosenOffer !== null && favorites?.find((item) => item.id === chosenOffer.id);
    return isFavorite;
  }
);
