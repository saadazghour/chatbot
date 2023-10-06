import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: 'https://flasktest-vkre.onrender.com',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.access_token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
})


export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['User','Files','Messages','History'],
    endpoints: builder => ({})
})