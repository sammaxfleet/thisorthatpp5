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
    tagTypes: ['Profiles', 'Posts', 'Post', "Comments", "SavedPosts"],
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
            query: (search) => `posts?search=${search}`,
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
        }),
        likePost: builder.mutation({
            query(data) {
                return {
                    url: `/likes/`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ["Posts", "Profiles", "Post"]
        }),
        deleteLikePost: builder.mutation({
            query(data) {
                return {
                    url: `/likes/${data}`,
                    method: 'DELETE',

                }
            },
            invalidatesTags: ["Posts", "Profiles", "Post"]
        }),
        changeUserName: builder.mutation({
            query(data) {
                return {
                    url: `/dj-rest-auth/user/`,
                    method: 'PUT',
                    body: data,

                }
            },
            invalidatesTags: ["Posts", "Profiles", "Post"]
        }),
        createPostComment: builder.mutation({
            query(data) {
                return {
                    url: `/comments/`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ["Posts", "Profiles", "Comments"]
        }),
        editPostComment: builder.mutation({
            query(data) {
                return {
                    url: `/comments/${data.id}/`,
                    method: 'PUT',
                    body: data.data
                }
            },
            invalidatesTags: ["Posts", "Profiles", "Comments", "Post"]
        }),
        deletePostComment: builder.mutation({
            query(data) {
                return {
                    url: `/comments/${data}/`,
                    method: 'DELETE',

                }
            },
            invalidatesTags: ["Posts", "Profiles", "Comments", "Post"]
        }),
        getPostComments: builder.query({
            query(data) {
                return {
                    url: `/comments/?post=${data}`,
                    method: 'GET',

                }
            },
            providesTags: ["Comments"]
        }),
        followUser: builder.mutation({
            query(data) {
                return {
                    url: `/followers/`,
                    method: 'POST',
                    body: data

                }
            },
            invalidatesTags: ["Posts", "Profiles", "Comments", "Post"]
        }),
        unFollowerUser: builder.mutation({
            query(data) {
                return {
                    url: `/followers/${data.id}`,
                    method: 'DELETE',


                }
            },
            invalidatesTags: ["Posts", "Profiles", "Comments", "Post"]
        }),
        savePost: builder.mutation({
            query(data) {
                return {
                    url: `/saved/`,
                    body: data,
                    method: "POST"

                }
            },
            invalidatesTags: ["SavedPosts"]
        }),
        getSavedPosts: builder.query({
            query() {
                return {
                    url: '/saved/',
                    method: "GET"
                }
            },
            providesTags: ["SavedPosts"]
        }),
        deleteSavedPosts: builder.mutation({
            query(saved_id) {
                return {
                    url: `/saved/remove_saved_post?saved_id=${saved_id}`,
                    method: "GET"
                }
            },
            invalidatesTags: ["SavedPosts"]
        })



    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSavedPostsQuery, useDeleteSavedPostsMutation, useSavePostMutation, useChangeUserNameMutation, useUnFollowerUserMutation, useFollowUserMutation, useDeletePostCommentMutation, useEditPostCommentMutation, useGetPostCommentsQuery, useCreatePostCommentMutation, useDeleteLikePostMutation, useLikePostMutation, useDeletePostMutation, useGetSinglePostQuery, useGetSingleProfileQuery, useGetProfilesQuery, useGetPostsQuery, useGetProfilePostsQuery } = thisOrThatApi