import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/HomePage.module.css";
import { useCreatePostCommentMutation, useDeleteLikePostMutation, useGetPostsQuery, useLikePostMutation } from "../../store/apiSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
const Posts = ({ data }) => {

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const [likePost, { isSuccess }] = useLikePostMutation()

  const [deleteLikePost, { isSuccess: deleteLikePostSuccess }] = useDeleteLikePostMutation()
  const [postComment, { isSuccess: postCommentSucces }] = useCreatePostCommentMutation();
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


  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

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
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data && data.results.map((post) => {
        return (
          <PostCard post={post} showComments={false} handleLike={handleLike} handleComment={handleComment} handleUnLike={handleUnLike} />
        );
      })}
    </div>
  );
};

export default Posts;