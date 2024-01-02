import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

import { useGetPostCommentsQuery, useGetSinglePostQuery } from '../store/apiSlice';
import { useSelector } from "react-redux";
import PostCard from '../components/PostCard';
import { useCreatePostCommentMutation, useDeleteLikePostMutation, useLikePostMutation } from "../store/apiSlice";
const PostDetailPage = () => {
    let { slug } = useParams();
    const { data, isLoading, isSuccess: SinglePostQuerySuccess } = useGetSinglePostQuery(slug, {
        refetchOnFocus: true, refetchOnMountOrArgChange: true, refetchOnReconnect: true
    })
    const { data: CommentsData } = useGetPostCommentsQuery(data?.id, {
        skip: !SinglePostQuerySuccess,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const [likePost, { isSuccess }] = useLikePostMutation()

    const [deleteLikePost, { isSuccess: deleteLikePostSuccess }] = useDeleteLikePostMutation()
    const [postComment] = useCreatePostCommentMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success("Post Liked Successfully")
        }
    }, [isSuccess])
    useEffect(() => {
        if (deleteLikePostSuccess) {
            toast.success("Post UnLiked Successfully")
        }
    }, [deleteLikePostSuccess])




    const handleLike = (id) => {
        if (isLoggedIn) {
            likePost(JSON.stringify({ post: id }))

        } else {
            toast.info("You Need To LogIn to like a post ")
        }
    };
    const handleUnLike = (id) => {
        deleteLikePost(id)
    }

    const handleComment = (post) => {
        if (isLoggedIn) {
            const newComment = prompt("Enter your comment for " + post.title);
            if (newComment) {
                postComment(JSON.stringify({ post: post.id, content: newComment }))
            }
        } else {
            toast.info("You Need to login to post a comment")
        }

    };
    return (
        <>
            {isLoading && (
                <Spinner />
            )}
            {data && (
                <PostCard post={data} showComments={true} comments={CommentsData?.results} handleLike={handleLike} handleComment={handleComment} handleUnLike={handleUnLike} />

            )}

        </>
    )
}

export default PostDetailPage