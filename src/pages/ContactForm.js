import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { axiosInstance, axiosInstanceFormData } from '../axiosApi';
import { toast } from 'react-toastify';
const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { email, reason, description });
        // You can send this data to your backend API for processing
        const formData = new FormData();
        formData.append('reason', reason)
        formData.append('description', description)
        if (email) {
            formData.append('email', email)
        }
        const res = await axiosInstanceFormData.post('contact/', formData)
        if (res.status === 201) {
            toast.success("Your Query has been submitted")
        } else {
            toast.error("something went wrong")
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Contact Form This Or That</h1>
            {
                !isLoggedIn && (
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                )
            }


            <Form.Group controlId="formReason">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                    as="select"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                >
                    <option value="">Select a reason</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;
