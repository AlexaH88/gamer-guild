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
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import AddContentButton from "../../components/AddContentButton";

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
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span>{owner}</span>
          </Link>
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
      <Card.Body className="pt-0">
        {name && (
          <Card.Title className={`text-center ${styles.Heading}`}>
            {name}
          </Card.Title>
        )}
        {about && <Card.Text>{about}</Card.Text>}
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={name} />
      </Link>
      <Card.Body>
        <ListGroup>
          {date && (
            <ListGroupItem>
              <span className={styles.EventInfo}>When:</span> {date}
            </ListGroupItem>
          )}
          {start_time && (
            <ListGroupItem>
              <span className={styles.EventInfo}>Start Time:</span> {start_time}
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
      <Card.Body>
        {is_owner && <AddContentButton url="/polls/create" text="Add Poll" />}
      </Card.Body>
    </Card>
  );
};

export default Event;
