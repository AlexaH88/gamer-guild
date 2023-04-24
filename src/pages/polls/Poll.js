import React from "react";
import styles from "../../styles/Poll.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Poll = (props) => {
  const {
    id,
    owner,
    votes_count,
    vote_id,
    question,
    updated_at,
    pollPage,
    setEvent,
    setPolls,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/polls/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/polls/${id}/`);
      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
          },
        ],
      }));

      setPolls((prevPolls) => ({
        ...prevPolls,
        results: prevPolls.results.filter((poll) => poll.id !== id),
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleVote = async () => {
    try {
      const { data } = await axiosRes.post("/votes/", { poll: id });
      setPolls((prevPolls) => ({
        ...prevPolls,
        results: prevPolls.results.map((poll) => {
          return poll.id === id
            ? { ...poll, votes_count: poll.votes_count + 1, vote_id: data.id }
            : poll;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnvote = async () => {
    try {
      await axiosRes.delete(`/votes/${vote_id}/`);
      setPolls((prevPolls) => ({
        ...prevPolls,
        results: prevPolls.results.map((poll) => {
          return poll.id === id
            ? { ...poll, votes_count: poll.votes_count - 1, vote_id: null }
            : poll;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Poll}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && pollPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {question && (
          <Card.Title className={`text-center ${styles.Heading}`}>
            {question}
          </Card.Title>
        )}
        {currentUser ? (
          <VoteCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            poll={id}
            setPoll={setPoll}
            setVotes={setVotes}
          />
        ) : votes.results.length ? (
          "Votes"
        ) : null}
        {votes.results.length ? (
          <InfiniteScroll
            children={votes.results.map((vote) => (
              <Vote
                key={vote.id}
                {...vote}
                setPoll={setPoll}
                setVotes={setVotes}
              />
            ))}
            dataLength={votes.results.length}
            loader={<Asset spinner />}
            hasMore={!!votes.next}
            next={() => fetchMoreData(votes, setVotes)}
          />
        ) : currentUser ? (
          <span>No votes yet, be the first to vote!</span>
        ) : (
          <span>No votes yet, log in to vote!</span>
        )}
        <div className={styles.VoteBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't vote for your own poll!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.VoteImpossible}`} />
            </OverlayTrigger>
          ) : vote_id ? (
            <span onClick={handleUnvote}>
              <i className={`fa-solid fa-thumbs-up ${styles.Voted}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleVote}>
              <i className={`fa-solid fa-thumbs-up ${styles.UnVoted}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to vote for polls!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.VoteImpossible}`} />
            </OverlayTrigger>
          )}
          {votes_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Poll;
