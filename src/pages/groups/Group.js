import React from "react";
import styles from "../../styles/Group.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Group = (props) => {
  const {
    id,
    owner,
    name,
    about,
    image,
    updated_at,
    webiste,
    location,
    phone,
    email,
    groupPage,
    setGroups,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/groups/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/groups/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Group}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className={styles.Heading}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.Heading}>{updated_at}</span>
            {is_owner && groupPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/groups/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.GroupBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own group!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeImpossible}`} />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa-solid fa-thumbs-up ${styles.Liked}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`fa-solid fa-thumbs-up ${styles.UnLiked}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like groups!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeImpossible}`} />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/groups/${id}`}>
            <i className="fa-solid fa-comments" />
          </Link>
          {comments_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't attend your own group!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.AttendImpossible}`}
              />
            </OverlayTrigger>
          ) : attend_id ? (
            <span onClick={handleUnattend}>
              <i className={`fa-solid fa-calendar-check ${styles.Attended}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleAttend}>
              <i className={`fa-solid fa-calendar-check ${styles.UnAttended}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to attend groups!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.AttendImpossible}`}
              />
            </OverlayTrigger>
          )}
          {attendees_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Group;
