import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/Form.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function PollCreateForm(props) {
  const {
    setEvent,
    setPolls,
    profileImage,
    profile_id,
  } = props;
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/polls/", {
        question,
        event,
      });
      setPolls((prevPolls) => ({
        ...prevPolls,
        results: [data, ...prevPolls.results],
      }));
      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
            polls_count: prevEvent.results[0].polls_count + 1,
          },
        ],
      }));
      setQuestion("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            as="text"
            placeholder="my poll question..."
            name="question"
            className={styles.Form}
            value={question}
            onChange={handleChange}
          >
          </Form.Control>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!question.trim()}
        type="submit"
      >
        submit
      </button>
    </Form>
  );
}

export default PollCreateForm;
