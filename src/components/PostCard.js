import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/HomePage.module.css";
import { useNavigate as useNavigation } from "react-router-dom";
import PostCardComments from "./PostCardComments";
import { toast } from "react-toastify";
import { useSavePostMutation, useCreatePostCommentMutation } from "../store/apiSlice";
import { useSelector } from "react-redux";
const PostCard = ({ post, showComments, handleLike, handleComment, handleUnLike, comments = [], handleDelete, handleInputChange, handleSaveEdit }) => {
    const navigate = useNavigation();
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [postComment] = useCreatePostCommentMutation();
    const [saved_post, { isSuccess }] = useSavePostMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success("Post Saved")
        }
    }, [isSuccess])
    const savePost = () => {
        if (isLoggedIn) {
            toast.info("Saving Post")

            saved_post(JSON.stringify({ post: post.id }))

        } else {
            toast.error("You need to login to save a post ")
        }
    }

    const handleCommentSubmit = () => {
        if (!commentText.trim()) {
            toast.error("Please enter a comment");
            return;
        }

        postComment(JSON.stringify({ post: post.id, content: commentText }))
        setCommentText("");
        setShowCommentModal(false);
    };

    return (
        <Card className="custom-card" style={{ marginBottom: "20px" }}>
            {/* User Circle */}
            <div className="flex-h" onClick={() => navigate("/profiles/" + post.profile_id)}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <img
                        src={post.profile_image}
                        className="rounded-circle"
                        alt="user"
                        width={50}
                        height={50}
                        style={{ marginRight: "10px" }}
                    />
                    <div>
                        <p style={{ marginBottom: "5px", fontWeight: "bold" }}>{post.owner}</p>
                        <p style={{ marginBottom: "5px", color: "blue" }}>{post.owner}</p>
                    </div>
                </div>
                <p style={{ marginTop: "10px" }}>{post.created_at}</p>
            </div>

            <Card.Img
                onClick={() => navigate("/post/" + post.id)}
                variant="top"
                src={post.image}
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />

            <Card.Body>
                <div onClick={() => navigate("/post/" + post.id)}>
                    <h1 className={styles.cardText}>{post.title}</h1>
                    <Card.Text className={styles.cardText}> Desc: {post.content}</Card.Text>
                    <Card.Text className={styles.cardText}>Fashion Inspo: {post.fashion_inspiration}</Card.Text>
                </div>

                <div className="flex-h" style={{ justifyContent: "space-between", marginTop: "15px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <div className="like-comment-section">
                            {/* like emoji */}
                            <span role="img" aria-label="like" className={styles.emoji}>
                                👍
                            </span>{" "}
                            <span className="like-count">{post.likes_count}</span> likes
                        </div>
                        <div className="like-comment-section" onClick={() => navigate("/post/" + post.id)}>
                            {/* comment emoji */}
                            <span role="img" aria-label="comment" className={styles.emoji}>
                                💬
                            </span>{" "}
                            <span className="comment-count">{post.comments_count}</span> comment
                        </div>
                    </div>
                    <div className="action-buttons">
                        {!post.like_id && (
                            <Button
                                variant="secondary"
                                onClick={() => handleLike(post.id)}
                                className="action-button"
                            >
                                Like
                            </Button>
                        )}
                        {post.like_id && (
                            <Button
                                variant="secondary"
                                onClick={() => handleUnLike(post.like_id)}
                                className="action-button"
                            >
                                UnLike
                            </Button>
                        )}

                        <Button variant="secondary" onClick={() => setShowCommentModal(true)} className="action-button">
                            Comment
                        </Button>
                        <i className="fa-regular fa-heart" onClick={savePost}></i>
                    </div>
                </div>
                <div>
                    {showComments && comments && comments.map((comment) => (
                        <PostCardComments key={comment.id} comment={comment} />
                    ))}
                </div>
                {/* Comment Modal */}
                <Modal show={showCommentModal} onHide={() => setShowCommentModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Write a Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Write your comment here..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        ></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowCommentModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCommentSubmit}>
                            Post Comment
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>


    )
}

export default PostCard