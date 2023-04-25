import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Media,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    reply_id,
    replies_count,
    polls_count,
    name,
    about,
    image,
    platform,
    date,
    start_time,
    end_time,
    location,
    updated_at,
    eventPage,
    setEvents,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleReply = async () => {
    try {
      const { data } = await axiosRes.post("/replies/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                replies_count: event.replies_count + 1,
                reply_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnreply = async () => {
    try {
      await axiosRes.delete(`/replies/${reply_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                replies_count: event.replies_count - 1,
                reply_id: null,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
            </Link>
            <span>{owner}</span>
          </div>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Img src={image} alt={name} />
      <Card.Body>
        <Link to={`/events/${id}`}>
          <Card.Title className={`text-center ${styles.Heading}`}>
            {name}
          </Card.Title>
        </Link>
        {about && <Card.Text>{about}</Card.Text>}
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card.Header className={styles.ListHeader}>
              Event Details
            </Card.Header>
            <ListGroup>
              {date && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>When:</span> {date}
                </ListGroupItem>
              )}
              {start_time && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Start Time:</span>{" "}
                  {start_time}
                </ListGroupItem>
              )}
              {end_time && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>End Time:</span> {end_time}
                </ListGroupItem>
              )}
              {location && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Where (in person):</span>{" "}
                  {location}
                </ListGroupItem>
              )}
              {platform && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Where (virtual):</span>{" "}
                  <Card.Link href={platform}>{platform}</Card.Link>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
          <Col>
            <Card.Header className={styles.ListHeader}>
              Organiser Details
            </Card.Header>
            <ListGroup>
              {date && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>When:</span> {date}
                </ListGroupItem>
              )}
              {start_time && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Start Time:</span>{" "}
                  {start_time}
                </ListGroupItem>
              )}
              {end_time && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>End Time:</span> {end_time}
                </ListGroupItem>
              )}
              {location && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Where (in person):</span>{" "}
                  {location}
                </ListGroupItem>
              )}
              {platform && (
                <ListGroupItem>
                  <span className={styles.EventInfo}>Where (virtual):</span>{" "}
                  <Card.Link href={platform}>{platform}</Card.Link>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
        <div className={styles.EventBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't reply to your own event!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.ReplyImpossible}`}
              />
            </OverlayTrigger>
          ) : reply_id ? (
            <span onClick={handleUnreply}>
              <i className={`fa-solid fa-calendar-check ${styles.Replied}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleReply}>
              <i className={`fa-solid fa-calendar-check ${styles.UnReplied}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to reply to events!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.ReplyImpossible}`}
              />
            </OverlayTrigger>
          )}
          {replies_count}
          <Link to={`/events/${id}`}>
            <i className="fa-solid fa-clipboard-question" />
          </Link>
          {polls_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
