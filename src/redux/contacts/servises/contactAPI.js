import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62e65af1de23e263792af968.mockapi.io/api/stars-numbers',
  }),

  tagTypes: ['Contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: (name) => ({ url: `/contacts?sortBy=${name}`, method: 'GET' }),
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({name, number}) => ({url: '/contacts', method: 'POST', 
      body: {
        name,
        number,
        favorites: false,
      }}),
      invalidatesTags: ['Contact']
    }),

    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),

    toggleFavorites: builder.mutation({
      query: ({id, favorites}) => ({url: `/contacts/${id}`, method: 'PUT', body: {favorites}}),
      invalidatesTags: ['Contact']
    })


  }),
});

export const { 
  useGetAllContactsQuery,
  useAddContactMutation, 
  useDeleteContactMutation, 
  useToggleFavoritesMutation
} = contactApi;


