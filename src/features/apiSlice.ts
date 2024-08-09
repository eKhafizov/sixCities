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
  //all tag types
  tagTypes: ['COMMENTS', 'FAVORITES'],
  endpoints: (builder) => ({
    getOffers: builder.query<OffersArray, void>({
      query: () => APIRoute.Offers,
    }),

    getComments: builder.query<CommentServerType[], number>({
      query: (offerId) => `${APIRoute.Comments}/${offerId}`,
      //attached tag
      providesTags: ['COMMENTS'],
    }),
    addNewComment: builder.mutation<void, CommentType>({
      query: (formObject) => ({
        url: `${APIRoute.Comments}/${formObject.id}`,
        method: 'POST',
        body: {comment: formObject.comment, rating: formObject.rating}
      }),
      //using tag
      invalidatesTags: ['COMMENTS']
    }),

    getFavorites: builder.query<OffersArray, void>({
      query: () => APIRoute.Favourite,
      //attached tag
      providesTags: ['FAVORITES']
    }),
    addFavorite: builder.mutation<void, number>({
      query: (id) => ({
        url: `${APIRoute.Favourite}/${id}/1`,
        method: 'POST',
        body: id
      }),
      //using tag
      invalidatesTags: ['FAVORITES']
    }),
    deleteFavorite: builder.mutation<void, number>({
      query: (id) => ({
        url: `${APIRoute.Favourite}/${id}/0`,
        method: 'POST',
        body: id
      }),
      invalidatesTags : ['FAVORITES']
    })

  }),
});


// auto-generated hooks
export const {
  useGetOffersQuery,
  useGetCommentsQuery,
  useAddNewCommentMutation,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation
} = sixSitiesApi;
