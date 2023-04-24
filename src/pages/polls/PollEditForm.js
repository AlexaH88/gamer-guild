import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Alert,
  Image,
} from "react-bootstrap";
import styles from "../../styles/Form.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PollEditForm() {
  const [errors, setErrors] = useState({});

  const [pollData, setPollData] = useState({
    question: "",
  });
  const { question } = postData;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/polls/${id}/`);
        const { question, is_owner } = data;

        is_owner ? setPollData({ question }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPollData({
      ...pollData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("question", question);
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Question</Form.Label>
        <Form.Control
          type="text"
          name="question"
          value={question}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.question?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PollEditForm;
