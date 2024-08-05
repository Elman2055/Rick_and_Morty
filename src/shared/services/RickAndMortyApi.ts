import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page: number) => `/character/?page=${page}`,
    }),
    getEpisodes: builder.query({
      query: (page: number) => `/episode/?page=${page}`,
    }),
    getLocations: builder.query({
      query: (page: number) => `/location/?page=${page}`,
    }),
    getCharacter: builder.query({
      query: (id: number) => `/character/${id}`,
    }),
    getEpisodeInfo: builder.query({
      query: (id: number) => `/episode/${id}`,
    }),
    getLocationInfo: builder.query({
      query: (id: number) => `/location/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetEpisodesQuery,
  useGetLocationsQuery,
  useGetCharacterQuery,
  useGetEpisodeInfoQuery,
  useGetLocationInfoQuery,
} = rickAndMortyApi;
