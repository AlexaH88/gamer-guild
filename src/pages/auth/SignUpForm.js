import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Form.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import FillerImage from "../../components/FillerImage";
import InfoContainer from "../../components/InfoContainer";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      /* spread previous signUpData so only the relevant attribute is updated */
      ...signUpData,
      /* create key: value pair of name: value */
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    /* prevent the page from refreshing */
    event.preventDefault();
    try {
      /* redirect to url and include the signUpData entered */
      await axios.post("dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      /* optional chaining (?) to check if there is a an error response */
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {/* display message if username is present in errors */}
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {/* display message if password1 is present in errors */}
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {/* display message if password2 is present in errors */}
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <InfoContainer url="/signin" text="Already have an account?" span_text="Sign in"/>
      </Col>
      <FillerImage style={styles.SignUpCol} src="https://res.cloudinary.com/dfgylv4o2/image/upload/v1681242417/hero_insert_coin_aynmjq.png" />
    </Row>
  );
};

export default SignUpForm;
