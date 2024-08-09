import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { CommentServerType, CommentType, OffersArray } from '../types/types';
import { APIRoute } from '../store/utils/apiRoutes';
import { getToken } from '../utils/token';

// Define a service using a base URL and expected endpoints
export const sixSitiesApi = createApi({
  //reducer name for store
  reducerPath: 'sixCitiesApiReducer',
  // base path
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://13.react.htmlacademy.pro/six-cities',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('x-token', `${token}`);
      }
      return headers;
    },
  }),
  // all endpoint from our APIRoute
  endpoints: (builder) => ({
    getOffers: builder.query<OffersArray, void>({
      query: () => APIRoute.Offers,
    }),
    getComments: builder.query<CommentServerType[], number>({
      query: (offerId) => `${APIRoute.Comments}/${offerId}`
    }),
    // eslint-disable-next-line @typescript-eslint/ban-types
    addNewComment: builder.mutation<{}, CommentType>({
      query: (formObject) => ({
        url: `${APIRoute.Comments}/${formObject.id}`,
        method: 'POST',
        body: {comment: formObject.comment, rating: formObject.rating}
      })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetOffersQuery,
  useGetCommentsQuery,
  useAddNewCommentMutation
} = sixSitiesApi;
