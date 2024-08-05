
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};

const locations = ['Amsterdam', 'Brussels', 'Hamburg', 'Paris','Dusseldorf', 'Cologne'];

export type CommentType = {
    id: number;
    comment: string;
    rating: number;
  };
export type CommentsType = CommentType[];

export type OfferType = {
  bedrooms: number;
  city: {
    name: string;
    location: {latitude:number;longitude: number;zoom:number};};
  description: string;
  goods: string[];
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;};
  id: number; //а был number но пишеь ошибку
  images: string[];
  isFavorite: false;
  isPremium: false;
  location: {latitude: number; longitude: number; zoom: number};
  maxAdults: 2;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersArrayType = OfferType[];

const testOffer = {
  bedrooms: 2,
  city: {
    name: 'lalal',
    location: {latitude:33.333, longitude: 3.444, zoom: 10}},
  description: 'string',
  goods: ['string'],
  host: {
    id: 66,
    name: 'string',
    isPro: true,
    avatarUrl: 'string'},
  id: 66, //а был number но пишеь ошибку
  images: ['string'],
  isFavorite: false,
  isPremium: false,
  location: {latitude:33.333, longitude: 3.444, zoom: 10},
  maxAdults: 2,
  previewImage: 'string',
  price: 666,
  rating: 8,
  title: 'string',
  type: 'strng',
};
const testOfferArray = [testOffer, testOffer];

export {hotelType, locations, testOffer, testOfferArray};

