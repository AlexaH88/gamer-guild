import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/Form.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function PollCreateForm(props) {
  const { setEvent, setPolls, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/polls/", {
        content,
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
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Label>Do you want to see more events like this?</Form.Label>
          <Form.Control
            className={styles.Form}
            defaultValue="Vote..."
            as="select"
            name="content"
            value={content}
            onChange={handleChange}
          >
            <option value="definitely">Definitely</option>
            <option value="meh">Meh</option>
            <option value="hard_no">Hard No</option>
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
