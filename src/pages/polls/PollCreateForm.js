import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/Form.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function PollCreateForm(props) {
  const {
    event,
    setEvent,
    setPolls,
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
            polls_count: prevEvent.results[0].prevEvent + 1,
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
          <Form.Control
            className={styles.Form}
            placeholder="my poll..."
            as="textarea"
            value={question}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!question.trim()}
        type="submit"
      >
        create
      </button>
    </Form>
  );
}

export default PollCreateForm;
