
https://13.react.htmlacademy.pro/six-cities/comments/10 - комменты к месту
https://13.react.htmlacademy.pro/six-cities/offers/10/nearby - места вокруг конкретного оффера
https://13.react.htmlacademy.pro/six-cities/offers/10 - оффер конкретный

// .replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro');

const URL = 'https://13.react.htmlacademy.pro/six-cities';
const TIME_LIMIT = 3000;

const {data} = await api.get<OffersArrayType>(APIRoute.Offers);
const {data} = await api.get<OffersArrayType>(`${APIRoute.Offers}/${offerId}/nearby`);
const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment, rating});
await api.delete(APIRoute.Logout);
const {data} = await api.get<OffersArrayType>(APIRoute.Favourite);
await api.get(APIRoute.Login);
const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/1`);
const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/0`);

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favourite = '/favorite'
}