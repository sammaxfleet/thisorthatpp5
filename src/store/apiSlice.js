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
    tagTypes: ['Profiles', 'Posts', 'Post'],
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
        getProfilePosts: builder.query({
            query: (userId) => `posts/?owner__profile=${userId}`,
            providesTags: ["Posts"]
        }),
        getSinglePost: builder.query({
            query: (slug) => `/posts/${slug}`,
            providesTags: ["Post"]
        }),
        deletePost: builder.mutation({
            // query: (slug) => {url:`/posts/${slug}`,method},
            query(slug) {
                return {
                    url: `/posts/${slug}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["Posts", "Profiles"]
        })


    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDeletePostMutation, useGetSinglePostQuery, useGetSingleProfileQuery, useGetProfilesQuery, useGetPostsQuery, useGetProfilePostsQuery } = thisOrThatApi