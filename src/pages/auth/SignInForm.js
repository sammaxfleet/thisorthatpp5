import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import sidePicture from "../../components/assets/fashionbakayo.jpg";

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
import { login } from "../../api/axiosDefaults";

const SignInForm = ({ setIsLoggedIn }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [variant, setVarient] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const response = await login(data.get("username"), data.get("password1"));

    if (response) {
      if (response.status === 200) {
        setAlertMessage("Login successful");
        setShowAlert(true);
        setVarient("success");

        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoggedIn(true)
        setTimeout(() => {
          navigate.push("/homepage");
        }, 2000); // 1000ms= 1s
      }
    } else {
      console.log(response, "response");
      setIsLoggedIn(false)
      setAlertMessage("Invalid credentials");
      setShowAlert(true);
      setVarient("danger");
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
            <h1 className={styles.Header}>sign in</h1>

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

              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now</span>
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

export default SignInForm;