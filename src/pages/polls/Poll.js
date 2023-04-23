import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Poll.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import PollEditForm from "./PollEditForm";

const Poll = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    question,
    id,
    setEvent,
    setPolls,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/polls/${id}/`);
      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
            polls_count: prevEvent.results[0].polls_count - 1,
          },
        ],
      }));

      setPolls((prevPolls) => ({
        ...prevPolls,
        results: prevPolls.results.filter((poll) => poll.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <PollEditForm
              id={id}
              profile_id={profile_id}
              question={question}
              profileImage={profile_image}
              setPolls={setPolls}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p>{question}</p>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Poll;
