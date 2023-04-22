import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Image,
  Alert,
} from "react-bootstrap";
import Upload from "../../assets/upload.png";
import styles from "../../styles/Form.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function EventCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    name: "",
    about: "",
    image: "",
    platform: "",
    date: "",
    start_time: "",
    end_time: "",
    location: "",
  });
  const { name, about, image, platform, date, start_time, end_time, location } =
    eventData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("about", about);
    formData.append("image", imageInput.current.files[0]);
    formData.append("platform", platform);
    formData.append("date", date);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);
    formData.append("location", location);

    try {
      const { data } = await axiosReq.post("/events/", formData);
      history.push(`/events/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="about"
          value={about}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.about?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Start Time</Form.Label>
        <Form.Control
          type="time"
          name="start_time"
          value={start_time}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.start_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>End Time</Form.Label>
        <Form.Control
          type="time"
          name="end_time"
          value={end_time}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.end_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Platform URL</Form.Label>
        <Form.Control
          type="url"
          name="platform"
          value={platform}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.platform?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
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
        create
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
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className={`${styles.Upload} d-flex justify-content-center`}
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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

export default EventCreateForm;
