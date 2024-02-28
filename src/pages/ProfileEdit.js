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
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();
    let { slug } = useParams();
    const { data, isLoading } = useGetSingleProfileQuery(slug);
    const navigate = useNavigation();

    useEffect(() => {
        if (data && !data.is_owner) {
            navigate('/')
            toast.error("You are not allowed to edit this profile")
        }
    }, [data, isLoading, navigate])

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", bio);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axiosInstanceFormData.put(`profiles/${slug}/`, formData);
            if (response.status === 200) {
                toast.success("Profile updated successfully");
                dispatch(thisOrThatApi.util.invalidateTags(["Profiles"]));
                navigate(`/profiles/${slug}`);
            }
        } catch (error) {
            console.log(error, 'eeree')
            for (const key in error.response.data) {
                if (Object.hasOwnProperty.call(error.response.data, key)) {
                    // Iterate over each element in the array associated with the key
                    error.response.data[key].forEach(text => {
                        toast.error(text);
                    });
                }
            }
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2>Edit Profile {data && data.owner}</h2>
                    {isLoading && <Spinner animation="grow" />}
                    {data && (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Change Image</Form.Label>
                                <Form.Control type="file" onChange={handleImageChange} />
                                {imagePreview && (
                                    <div className="mt-2">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px' }}
                                        />
                                    </div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBio">
                                <Form.Label>Update Bio</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={bio}
                                    onChange={handleBioChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileEdit;
