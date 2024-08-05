import { OfferType } from './offers';
import { AuthorizationStatus } from '../store/const';

export function sortByPriceUp(a: OfferType,b: OfferType) {
  return a.price - b.price;
}

export function sortByPriceDown(a: OfferType, b: OfferType) {
  return b.price - a.price;
}

export function sortByPopularity(a: OfferType, b: OfferType) {
  return b.rating - a.rating;
}

const testState = {OFFERS_DATA: {
  error: false,
  isDataLoading: true,
  offersNearby: null,
  favouriteOffers: []
},
SERVER_DATA: {
  authorizationStatus: AuthorizationStatus.Auth
},
USER_ACTIVITY: {
  offers: [],
  chosenCity: {
    name: 'Amsterdam',
    lat:  52.3909553943508,
    lng: 4.85309666406198,
    zoom: 10
  },
  chosenFilter:'popular',
  chosenOfferComments: null,
}};


export const defaultTheme : {[name: string] : string} = {
  fontColorBlack: '#ff0000',
  colorWhite: '#ffffff',
};

export default testState;

