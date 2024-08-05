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
