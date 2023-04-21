import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/PollCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function PollCreateForm(props) {
  const {
    event,
    setEvent,
    setPolls,
    profileImage,
    profile_id,
    content_choices,
  } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/polls/", {
        content,
        content_choices,
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
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <label
          htmlFor="poll"
          className={`align-items-center ${styles.Heading}`}
        >
          Do you want to see more events like this?
        </label>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            id="poll"
            as="select"
            className={styles.Form}
            value={content.content_choices}
            onChange={handleChange}
          >
            <option>Definitely</option>
            <option>Meh</option>
            <option>Hell no</option>
          </Form.Control>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        submit
      </button>
    </Form>
  );
}

export default PollCreateForm;
