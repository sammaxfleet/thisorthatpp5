// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const thisOrThatApi = createApi({
    reducerPath: 'thisOrThatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://thisorthatapi-56bb400a2b0e.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("user")).access_token
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
                headers.set("Content-Type", "application/json")
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        getProfiles: builder.query({
            query: (name) => `profiles`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfilesQuery } = thisOrThatApi