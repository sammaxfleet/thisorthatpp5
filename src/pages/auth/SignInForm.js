import React, { FormEvent, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { login } from "../../api/axiosDefaults";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import sidePicture from "../../components/assets/fashionbakayo.jpg";
import {useDispatch,useSelector}from "react-redux";
import {  userLogin } from "../../store/usersSlice";
const SignInForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [variant, setVariant] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }

    return () => {};
  }, [isLoggedIn]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // const response = await login(formData.get("username"), formData.get("password1"));
    const form = {
      username: formData.get("username"),
      password: formData.get("password1"),
    };
    dispatch(userLogin(JSON.stringify(form)));

    // if (response) {
    //   if (response.status === 200) {
    //     setAlertMessage("Login successful");
    //     setShowAlert(true);
    //     setVariant("success");
    //     const  form = JSON.stringify(form);

    //     localStorage.setItem("user", JSON.stringify(response.data));
    //     // setIsLoggedIn(true);
    //     // setTimeout(() => {
    //     //   navigate("/homepage");
    //     // }, 2000); // 1000ms = 1s
    //   }
    // } else {
    //   setIsLoggedIn(false);
    //   setAlertMessage("Invalid credentials");
    //   setShowAlert(true);
    //   setVariant("danger");
    // }
  };

  return (
    <div>
      {showAlert && (
        <Alert variant={variant} onClose={() => setShowAlert(false)} dismissible>
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
                <Form.Group as={Col} controlId="password1">
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
        <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}>
          <Image className={`${appStyles.FillerImage}`} src={sidePicture} />
        </Col>
      </Row>
    </div>
  );
};

export default SignInForm;
