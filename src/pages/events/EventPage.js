import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poll from "../polls/Poll";
import PollCreateForm from "../polls/PollCreateForm";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import AddContentButton from "../../components/AddContentButton";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [polls, setPolls] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: event }, { data: polls }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
          axiosReq.get(`/polls/?event=${id}`),
        ]);
        setEvent({ results: [event] });
        setPolls(polls);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        {currentUser && <AddContentButton url="/events/create" text="Add Event" mobile />}
        <Event {...event.results[0]} setEvents={setEvent} eventPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <PollCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              event={id}
              setEvent={setEvent}
              setPolls={setPolls}
            />
          ) : polls.results.length ? (
            "Polls"
          ) : null}
          {polls.results.length ? (
            <InfiniteScroll
              children={polls.results.map((poll) => (
                <Poll
                  key={poll.id}
                  {...poll}
                  setEvent={setEvent}
                  setPolls={setPolls}
                />
              ))}
              dataLength={polls.results.length}
              loader={<Asset spinner />}
              hasMore={!!polls.next}
              next={() => fetchMoreData(polls, setPolls)}
            />
          ) : currentUser ? (
            <span>No poll responses yet, be the first to respond!</span>
          ) : (
            <span>No poll responses yet, log in to respond!</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {currentUser && <AddContentButton url="/events/create" text="Add Event" />}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default EventPage;
