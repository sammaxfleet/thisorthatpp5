import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import styles from "../styles/HomePage.module.css";
import { useNavigate as useNavigation } from "react-router-dom";
import PostCardComments from "./PostCardComments";

const PostCard = ({ post, showComments, handleLike, handleComment, handleUnLike, comments = [], handleDelete, handleInputChange, handleSaveEdit }) => {
    const navigate = useNavigation();

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
                onClick={() => navigate("/post/" + post.id)}
                variant="top"
                src={post.image}
                style={{
                    width: "300px",
                    marginLeft: "150px",
                    height: "400px",
                }}
            />

            <Card.Body>
                <div onClick={() => navigate("/post/" + post.id)}>
                    <h1 className={styles.cardText}>{post.title}</h1>
                    <Card.Text className={styles.cardText}>{post.content}</Card.Text>
                </div>

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
                            onClick={() => navigate("/post/" + post.id)}
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
                    {showComments && (
                        <>
                            {comments && comments.map((comment) => {
                                return (
                                    <PostCardComments comment={comment} />
                                );
                            })}
                        </>
                    )}

                </div>
            </Card.Body>
        </Card>
    )
}

export default PostCard