// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const thisOrThatApi = createApi({
    reducerPath: 'thisOrThatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://thisorthatapi-56bb400a2b0e.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().users.access || localStorage.getItem("access");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
                headers.set("Content-Type", "application/json")
            }
            // headers.set("Content-Type", "multipart/form-data;")

            return headers
        }
    }),
    tagTypes: ['Profiles','Posts'],
    endpoints: (builder) => ({
        getProfiles: builder.query({
            query: (name) => `profiles`,
            providesTags: ['Profiles'],
        }),
        getSingleProfile: builder.query({
            query: (slug) => `profiles/${slug}`,
            providesTags: (result, error, slug) => [{ type: 'Profiles', slug }],
        }),
        getPosts: builder.query({
            query: () => `posts`,
            providesTags: ['Posts'],
        }),

 
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSingleProfileQuery,useGetProfilesQuery } = thisOrThatApi