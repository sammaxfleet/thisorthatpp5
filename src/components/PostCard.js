import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import styles from "../styles/HomePage.module.css";
import { useNavigate as useNavigation } from "react-router-dom";

const PostCard = ({ post, showComments, handleLike, handleComment, handleUnLike, comments = [], handleDelete, handleInputChange, handleSaveEdit }) => {
    const navigate = useNavigation();
    const [editing, setEditing] = useState(false);
    const [editedContent, setEditedContent] = useState();

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        // setEditedContent(comment.content); // Reset edited content to original comment content
    };
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
                                    <Card className="mb-3">
                                        <Card.Body className="d-flex align-items-center">
                                            <span
                                                role="img"
                                                aria-label="comment"
                                                className="emoji mr-3"
                                                style={{ fontSize: '24px' }}
                                            >
                                                💬
                                            </span>
                                            {editing ? (
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={editedContent}
                                                    onChange={handleInputChange}
                                                    defaultValue={comment.content}
                                                />
                                            ) : (
                                                <Card.Text className="mb-0">{comment.content}</Card.Text>
                                            )}
                                        </Card.Body>
                                        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={comment.profile_image}
                                                    alt="Profile"
                                                    className="rounded-circle mr-2"
                                                    style={{ width: '30px', height: '30px' }}
                                                />
                                                <span>{comment.owner}</span>
                                            </div>
                                            {editing ? (
                                                <div>
                                                    <button className="btn btn-sm btn-secondary mr-2" onClick={handleSaveEdit}>
                                                        Save
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={handleCancelEdit}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary" id={`dropdown-basic-${comment.id}`}>
                                                        Options
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
                                                        <Dropdown.Item>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            )}
                                        </Card.Footer>
                                    </Card>
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