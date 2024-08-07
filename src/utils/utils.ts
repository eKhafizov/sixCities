// .replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro');

import { OfferType } from '../types/types';

export const citiesList = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
];

export const filterList = [
  'popular', 'priceHighToLow', 'priceLowToHigh', 'topRatedFirst'
];

export const citiesLocation = [
  {
    name : 'Amsterdam',
    lat : 52.3909553943508,
    lng : 4.85309666406198,
    zoom : 10
  },
  {
    name : 'Hamburg',
    lat : 53.541328,
    lng : 9.984355,
    zoom : 10
  },
  {
    name : 'Paris',
    lat : 48.858093,
    lng : 2.294694,
    zoom : 10
  },
  {
    name : 'Cologne',
    lat : 50.935173,
    lng : 6.953101,
    zoom : 10
  },
  {
    name : 'Brussels',
    lat : 50.85034,
    lng : 4.35171,
    zoom : 10
  },
  {
    name : 'Dusseldorf',
    lat : 51.233334,
    lng : 6.783333,
    zoom : 10
  },
];

export function sortByPriceUp(a: OfferType,b: OfferType) {
  return a.price - b.price;
}

export function sortByPriceDown(a: OfferType, b: OfferType) {
  return b.price - a.price;
}

export function sortByPopularity(a: OfferType, b: OfferType) {
  return b.rating - a.rating;
}
