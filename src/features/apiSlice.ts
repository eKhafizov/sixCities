import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { CommentServerType, CommentType, OffersArray } from '../types/types';
import { APIRoute } from '../store/utils/apiRoutes';

// Define a service using a base URL and expected endpoints
export const sixSitiesApi = createApi({
  //reducer name for store
  reducerPath: 'sixCitiesApiReducer',
  // base path
  baseQuery: fetchBaseQuery({baseUrl: 'https://13.react.htmlacademy.pro/six-cities' }),
  // all endpoint from our APIRoute
  endpoints: (builder) => ({
    getOffers: builder.query<OffersArray, void>({
      query: () => APIRoute.Offers,
    }),
    getComments: builder.query<CommentServerType[], number>({
      query: (offerId) => `${APIRoute.Comments}/${offerId}`
    }),
    addNewComment: builder.mutation<number, CommentType>({
      query: (formObject) => ({
        url: `${APIRoute.Comments}/${formObject.id}`,
        method: 'POST',
        body: formObject
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
