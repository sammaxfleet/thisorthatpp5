import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { axiosInstanceFormData } from '../axiosApi';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thisOrThatApi } from '../store/apiSlice';
const NewPost = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("handle uploading-", imagePreviewUrl);
  //   console.log(e, "e")
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   formData.append("title", e.target[0].value);
  //   formData.append("content", e.target[1].value);
  //   formData.append("fashion_inspiration", e.target[2].value);
  //   const data = await axiosInstanceFormData.post(`posts/`, formData)
  //   console.log(data, "data from axios")
  //   if (data.status === 201) {
  //     toast.success("Post created successfully")
  //     dispatch(thisOrThatApi.util.invalidateTags(["Posts"]))
  //     navigate(`/`)

  //   } else {
  //     for (const key in data.response.data) {
  //       if (Object.hasOwnProperty.call(data.response.data, key)) {
  //         // Iterate over each element in the array associated with the key
  //         data.response.data[key].forEach(text => {
  //           toast.error(text);
  //         });
  //       }
  //     }
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", e.target[0].value);
    formData.append("content", e.target[1].value);
    formData.append("fashion_inspiration", e.target[2].value);

    try {
      const { data, status } = await axiosInstanceFormData.post(`posts/`, formData);

      if (status === 201) {
        toast.success("Post created successfully");
        dispatch(thisOrThatApi.util.invalidateTags(["Posts"]));
        navigate(`/`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        for (const key in responseData) {
          if (Object.hasOwnProperty.call(responseData, key)) {
            responseData[key].forEach(text => {
              toast.error(`${key}:- ${text}`);
            });
          }
        }
      } else {
      }
    }
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Form.Group>
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
              <Form.Control type="text" placeholder="Add Celebrity name here!" />
            </Form.Group>


            <Form.Group controlId="formLocation">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Fashion Ispiration</Form.Label>
              <Form.Control type="text" placeholder="You can add Fashion Ispiration here" />
            </Form.Group>




            <Row>

              <Col>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default NewPost