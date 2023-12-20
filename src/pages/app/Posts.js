import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/HomePage.module.css";
import { useDeleteLikePostMutation, useGetPostsQuery, useLikePostMutation } from "../../store/apiSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Posts = () => {
  const { data, isLoading, isError } = useGetPostsQuery({
    refetchOnFocus: true,

  });
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const [likePost, { isSuccess }] = useLikePostMutation()

  const [deleteLikePost, { isSuccess: deleteLikePostSuccess }] = useDeleteLikePostMutation()

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
    const newComment = prompt("Enter your comment for " + post.title);
    if (newComment) {
    }
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "80px",
      }}
    >
      {data && data.results.map((post) => {
        return (
          <Card style={{ width: "600px", marginBottom: "20px" }}>
            {/* User Circle */}
            <div className="flex-h">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={post.profile_image}
                  className="rounded-circle"
                  alt="user"
                  width={50}
                  height={50}
                />
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {post.owner}
                </p>
                |
                <p
                  style={{
                    marginTop: "20px",
                    color: "blue",
                  }}
                >
                  {post.owner}
                </p>
              </div>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                {post.created_at}
              </p>
            </div>

            <Card.Img
              variant="top"
              src={post.image}
              style={{
                width: "300px",
                marginLeft: "150px",
                height: "400px",
              }}
            />

            <Card.Body>
              <h1 className={styles.cardText}>{post.title}</h1>
              <Card.Text className={styles.cardText}>{post.content}</Card.Text>
              <div className="flex-h">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {/* like emoji */}
                    <span role="img" aria-label="like" className={styles.emoji}>
                      👍
                    </span>{" "}
                    {post.likes_count} likes
                  </p>
                  <p
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {/* comment emoji */}
                    <span
                      role="img"
                      aria-label="comment"
                      className={styles.emoji}
                    >
                      💬
                    </span>{" "}
                    {post.comments_count} comments
                  </p>
                </div>
                <div>
                  {!post.like_id && (
                    <Button
                      variant="primary"
                      onClick={() => handleLike(post.id)}
                      style={{
                        marginRight: "20px",
                      }}
                    >
                      Like
                    </Button>
                  )}
                  {post.like_id && (
                    <Button
                      variant="primary"
                      onClick={() => handleUnLike(post.like_id)}
                      style={{
                        marginRight: "20px",
                      }}
                    >
                      UnLike
                    </Button>
                  )}

                  <Button variant="primary" onClick={() => handleComment(post)}>
                    Comment
                  </Button>
                </div>
              </div>
              <div>
                {/* {comments.map((comment) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        borderRadius: "10px",
                        height: "50px",
                        marginBottom: "20px",
                        gap: "20px",
                        backgroundColor: "lightgray",
                      }}
                    >
                      <h3>
                        <span
                          role="img"
                          aria-label="comment"
                          className={styles.emoji}
                        >
                          💬
                        </span>
                      </h3>
                      <p
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        {comment}
                      </p>
                    </div>
                  );
                })} */}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;