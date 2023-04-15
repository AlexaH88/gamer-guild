import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
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
    comments_count,
    likes_count,
    attendees_count,
    like_id,
    attend_id,
    title,
    content,
    image,
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

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, likes_count: event.likes_count + 1, like_id: data.id }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, likes_count: event.likes_count - 1, like_id: null }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttend = async () => {
    try {
      const { data } = await axiosRes.post("/attendees/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, attendees_count: event.attendees_count + 1, attend_id: data.id }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnattend = async () => {
    try {
      await axiosRes.delete(`/attendees/${attend_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, attendees_count: event.attendees_count - 1, attend_id: null }
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
            <span className={styles.Heading}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.Heading}>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.EventBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own event!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeOwner}`} />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className="fa-solid fa-thumbs-up" />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className="fa-solid fa-thumbs-up" />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like events!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeOwner}`} />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/events/${id}`}>
            <i className="fa-solid fa-comments" />
          </Link>
          {comments_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't attend your own event!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.AttendOwner}`}
              />
            </OverlayTrigger>
          ) : attend_id ? (
            <span onClick={handleUnattend}>
              <i className="fa-solid fa-calendar-check" />
            </span>
          ) : currentUser ? (
            <span onClick={handleAttend}>
              <i className="fa-solid fa-calendar-check" />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to attend events!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.AttendOwner}`}
              />
            </OverlayTrigger>
          )}
          {attendees_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
