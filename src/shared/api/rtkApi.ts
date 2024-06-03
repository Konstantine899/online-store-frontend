import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localstorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (accessToken) headers.set('Authorization', accessToken);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
