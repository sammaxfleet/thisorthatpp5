import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useChangeUserNameMutation } from '../store/apiSlice';
import { toast } from 'react-toastify';

const ChangeUsernameModal = ({ show, onHide, onSave }) => {
    const [changeUsername, { isSuccess, isError, error }] = useChangeUserNameMutation()
    const [newUsername, setNewUsername] = useState('');

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };
    useEffect(() => {
        if (isSuccess) {
            toast.success("User Name Changed")
            onHide();

        }


    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            console.log(error)
            for (const key in error.data) {
                if (Object.hasOwnProperty.call(error.data, key)) {
                    // Iterate over each element in the array associated with the key
                    error.data[key].forEach(text => {
                        toast.error(text);
                    });
                }
            }
        }
    }, [isError])


    const handleSave = () => {
        changeUsername({ username: newUsername })
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Change Username</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNewUsername">
                        <Form.Label>New Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter new username"
                            value={newUsername}
                            onChange={handleUsernameChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangeUsernameModal;
