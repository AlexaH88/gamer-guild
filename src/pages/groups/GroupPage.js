import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import Asset from "../../components/Asset";
import styles from "../../styles/GroupPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import Event from "../events/Event";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no_results.png";
// import { ProfileEditDropdown } from "../../components/MoreDropdown";

function GroupPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [group, setGroups] = useState({ results: [] });
  const [event, setEvents] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();

  // const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  // const { pageProfile } = useProfileData();

  // const [profile] = pageProfile.results;
  // const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: group },
          { data: event },
        ] = await Promise.all([
          axiosReq.get(`/groups/${id}/`),
          axiosReq.get(`/events/?owner__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setEvents(event);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainGroup = (
    <>
      {group?.is_owner && <ProfileEditDropdown id={group?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.GroupImage}
            roundedCircle
            src={group?.image}
          />
        </Col>
        <Col lg={6}>
          <h2 className="m-2">{group?.name}</h2>
          {group?.about && <Col className="p-3">{group.about}</Col>}
          {group?.owner && <Col className="p-3">{group.owner}</Col>}
          <Row className="justify-content-center no-gutters">
            {group?.website && (
              <a href={group?.website}>
                <i className="fa-brands fa-xbox" aria-hidden="true"></i>
              </a>
            )}
            {group?.location && (
              <a href={group?.location}>
                <i className="fa-brands fa-playstation" aria-hidden="true"></i>
              </a>
            )}
            {group?.phone && (
              <a href={group?.phone}>
                <i className="fa-brands fa-steam" aria-hidden="true"></i>
              </a>
            )}
            {group?.email && (
              <a href={group?.email}>
                <i className="fa-brands fa-discord" aria-hidden="true"></i>
              </a>
            )}
          </Row>
          <Row className="mt-2 justify-content-space-between">
            <Col className="my-2">
              <div>events</div>
              <div className={styles.Count}>{group?.events_count}</div>
            </Col>
            <Col className="my-2">
              <div>members</div>
              <div className={styles.Count}>{group?.members_count}</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (group?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlueOutline}`}
                onClick={() => handleUnfollow(group)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleFollow(group)}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
    </>
  );

  const mainGroupEvents = (
    <>
      <hr />
      {event.results.length ? (
        <InfiniteScroll
          children={event.results.map((event) => (
            <Event key={event.id} {...event} setEvents={setEvents} />
          ))}
          dataLength={event.results.length}
          loader={<Asset spinner />}
          hasMore={!!event.next}
          next={() => fetchMoreData(event, setEvents)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${group?.owner} hasn't created any events yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <h2>Popular Groups mobile</h2>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainGroup}
              {mainGroupEvents}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <h2>Popular Groups</h2>
      </Col>
    </Row>
  );
}

export default GroupPage;
