import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate as useNavigation } from "react-router-dom"
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import { axiosInstanceFormData } from '../axiosApi';
import { thisOrThatApi, useDeletePostMutation, useGetSinglePostQuery } from '../store/apiSlice';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
const PostEdit = () => {
    let { slug } = useParams();
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(null);
    const user = useSelector((state) => state.users.user);
    const [deletePost, { isSuccess }] = useDeletePostMutation(slug)
    const [file, setFile] = React.useState(null);
    const dispatch = useDispatch();

    const { data, isLoading } = useGetSinglePostQuery(slug, {
        refetchOnFocus: true, refetchOnMountOrArgChange: true, refetchOnReconnect: true
    })
    const navigate = useNavigation();
    useEffect(() => {
        if (data) {
            if (!data.is_owner) {
                navigate("/")
                toast.error("You dont have permission to edit this post ")
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    useEffect(() => {
        if (isSuccess) {
            toast.success("Post Deleted Successfully")
            // dispatch(thisOrThatApi.util.invalidateTags(["Post", "Profiles"]))
            navigate("/profiles/" + user.pk)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])
    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        setFile(file);

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        };

        reader.readAsDataURL(file);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) {
            formData.append("image", file);
        }
        formData.append("title", e.target[0].value);
        formData.append("content", e.target[1].value);
        formData.append("fashion_inspiration", e.target[2].value);
        const data = await axiosInstanceFormData.put(`posts/${slug}/`, formData)
        if (data.status === 200) {
            dispatch(thisOrThatApi.util.invalidateTags(["Post"]))
            toast.success("Post Updated Successfully")
            navigate("/profiles/" + user.pk)

        } else {
            toast.error('something went wrong ')
        }
    }
    return (
        <div className='container'>

            {isLoading && (
                <Spinner />
            )}
            {data && (<Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Form.Group>
                        {!file && data?.image && (
                            <Image src={data?.image} thumbnail fluid />
                        )}
                        {imagePreviewUrl && (
                            <Image src={imagePreviewUrl} thumbnail fluid />
                        )}
                        <Form.Label htmlFor="upload-button">
                            Click or tap to upload an image
                        </Form.Label>
                        <Form.Control id="upload-button" type="file" onChange={handleImageChange} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Celebrity Name</Form.Label>
                            <Form.Control type="text" placeholder="Add Celebrity name here!" defaultValue={data?.title} />
                        </Form.Group>


                        <Form.Group controlId="formLocation">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" defaultValue={data?.content} />
                        </Form.Group>
                        <Form.Group controlId="formLocation">
                            <Form.Label>Fashion Ispiration</Form.Label>
                            <Form.Control type="text" placeholder="You can add Fashion Ispiration here" defaultValue={data?.fashion_inspiration} />
                        </Form.Group>




                        <Row>

                            <Col>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                                <Button variant="danger" onClick={() => {
                                    deletePost(slug);
                                }}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>)}



        </div>
    )
}

export default PostEdit