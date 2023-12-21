import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import styles from "../styles/HomePage.module.css";
import { useDeletePostCommentMutation, useEditPostCommentMutation } from '../store/apiSlice';
import { toast } from 'react-toastify';
const PostCardComments = ({ comment, handleDelete, }) => {
    const [editing, setEditing] = useState(false);
    const [editedContent, setEditedContent] = useState();
    const [editComment, { isSuccess: CommentEditSuccess }] = useEditPostCommentMutation();
    const [deleteComment, { isSuccess: DeletePostCommentSuccess }] = useDeletePostCommentMutation();
    useEffect(() => {
        setEditedContent(comment.content)
    }, [])
    useEffect(() => {
        if (DeletePostCommentSuccess) {
            toast.success("Comment Deleted ")
        }
    }, [DeletePostCommentSuccess])
    useEffect(() => {
        if (CommentEditSuccess) {
            toast.success("Comment Edited ")
            setEditing(false)
        }
    }, [CommentEditSuccess])
    const handleEdit = () => {
        setEditing(true);
    };
    const handleInputChange = (e) => {
        setEditedContent(e.target.value)
    }
    const handleSaveEdit = (e) => {
        editComment({
            id: comment.id, data: {
                content: editedContent
            }
        })
    }

    const handleCancelEdit = () => {
        setEditing(false);
        // setEditedContent(comment.content); // Reset edited content to original comment content
    };
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
                {
                    comment.is_owner ? (<>
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
                                    <Dropdown.Item onClick={() => deleteComment(comment.id)}>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </>) : (<></>)
                }

            </Card.Footer>
        </Card>
    )
}

export default PostCardComments