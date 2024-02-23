import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import sidePicture from "../../components/assets/kanye.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import { signup } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [variant, setVarient] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const response = await signup(
      data.get("username"),
      data.get("password1"),
      data.get("password2")
    );
    // 200-299
    if (response) {
      if (response.status === 201) {
        setAlertMessage("Signup successful");
        setShowAlert(true);
        setVarient("success");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } else {
        for (const key in response.response.data) {
          if (Object.hasOwnProperty.call(response.response.data, key)) {
            // Iterate over each element in the array associated with the key
            response.response.data[key].forEach(text => {
              toast.error(text);
            });
          }
        }

      }
    }
  };

  return (
    <div>
      {showAlert && (
        <Alert
          variant={variant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
          <Container className={`${appStyles.Content} p-4 `}>
            <h1 className={styles.Header}>sign up</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="username">
                  <Form.Label className="d-none">Username</Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    placeholder="username"
                    name="username"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="Password1">
                  <Form.Label className="d-none">Password</Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Password"
                    name="password1"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="Password2">
                  <Form.Label className="d-none">Password</Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Col>
        <Col
          md={6}
          className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
        >
          <Image className={`${appStyles.FillerImage}`} src={sidePicture} />
        </Col>
      </Row>
    </div>
  );
};

export default SignUpForm;