import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2c61e09487msh15b2f45b73bd456p1b4d34jsne1e49a6b52ef"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/shazam-songs/get-details?id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/get-related-artist?id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/get-details?id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api6.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2c61e09487msh15b2f45b73bd456p1b4d34jsne1e49a6b52ef"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsByCountry: builder.query({
      query: ({ countryCode }) =>
        `/shazam/top_tracks_country?country_code=${countryCode}`,
    }),
  }),
});

export const { useGetSongsByCountryQuery } = shazamApi;
