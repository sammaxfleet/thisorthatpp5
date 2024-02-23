import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useGetSingleProfileQuery, thisOrThatApi } from "../store/apiSlice";
import { useParams } from "react-router-dom";
import { useNavigate as useNavigation } from "react-router-dom"
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { axiosInstanceFormData } from '../axiosApi';
function ProfileEdit() {
    const [image, setImage] = useState(null);
    const [bio, setBio] = useState('');
    const dispatch = useDispatch();
    let { slug } = useParams();
    const { data, isLoading } = useGetSingleProfileQuery(slug);
    const handleImageChange = (e) => {
        // Assuming you want to store the uploaded file
        setImage(e.target.files[0]);
    }
    const navigate = useNavigation();

    const handleBioChange = (e) => {
        setBio(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", e.target[1].value);
        if (e.target[0].files[0]) {
            formData.append("image", e.target[0].files[0]);
        }
        for (let [key, value] of formData.entries()) {
            // For file objects, you might want to log specific properties
            if (value instanceof File) {
            }
        }

        const data = await axiosInstanceFormData.put(`profiles/${slug}/`, formData)
        if (data.status === 200) {
            toast.success("Profile updated successfully")
            dispatch(thisOrThatApi.util.invalidateTags(["Profiles"]))
            navigate(`/profiles/${slug}`)
        }

        // Handle the form submission logic here
    }
    useEffect(() => {
        if (data && !data.is_owner) {
            navigate('/')
            toast.error("You are not allowed to edit this profile")
        }
    }, [data, isLoading, navigate])

    return (
        <Container>
            <Row>

                <Col md={6} className="mx-auto">
                    {isLoading && (
                        <Spinner animation="grow" />
                    )}
                    {data && (<>
                        <h2>Edit Profile {data.owner}</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Change Image</Form.Label>
                                <Form.Control type="file" onChange={handleImageChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBio">
                                <Form.Label>Update Bio</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    defaultValue={data?.content}
                                    value={bio}
                                    onChange={handleBioChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </>)}

                </Col>
            </Row>
        </Container>
    );
}

export default ProfileEdit;
