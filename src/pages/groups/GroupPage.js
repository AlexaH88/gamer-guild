import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Asset from "../../components/Asset";
import styles from "../../styles/GroupPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
// import PopularGroups from "./PopularGroups";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useGroupData, useSetGroupData } from "../../contexts/GroupDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Event from "../events/Event";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no_results.png";
import { MoreDropdown } from "../../components/MoreDropdown";

function GroupPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [events, setEvents] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const history = useHistory();
  const { id } = useParams();

  const { setGroupData, handleJoin, handleUnjoin } = useSetGroupData();
  const { pageGroup } = useGroupData();

  const [group] = pageGroup.results;
  const is_owner = currentUser?.username === group?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageGroup }, { data: events }] = await Promise.all([
          axiosReq.get(`/groups/${id}/`),
          // axiosReq.get(`/events/?owner__profile=${id}`),
        ]);
        setGroupData((prevState) => ({
          ...prevState,
          pageGroup: { results: [pageGroup] },
        }));
        setEvents(events);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setGroupData]);

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

  const mainGroup = (
    <>
      {group?.is_owner && (
        <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
      )}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.GroupImage}
            roundedCircle
            src={group?.image}
          />
        </Col>
        <Col lg={6}>
          <h2 className="m-2">{group?.owner}</h2>
          {group?.content && <Col className="p-3">{group.content}</Col>}
          <Row className="justify-content-center no-gutters">
            {group?.location && (
              <a href={group?.location}>
                <i className="fa-brands fa-xbox" aria-hidden="true"></i>
              </a>
            )}
            {group?.website && (
              <a href={group?.website}>
                <i className="fa-brands fa-playstation" aria-hidden="true"></i>
              </a>
            )}
            {group?.email && (
              <a href={group?.email}>
                <i className="fa-brands fa-steam" aria-hidden="true"></i>
              </a>
            )}
            {group?.phone && (
              <a href={group?.phone}>
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
            (group?.member_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlueOutline}`}
                onClick={() => handleUnjoin(group)}
              >
                unjoin
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleJoin(group)}
              >
                join
              </Button>
            ))}
        </Col>
      </Row>
    </>
  );

  const mainGroupEvents = (
    <>
      <hr />
      {events.results.length ? (
        <InfiniteScroll
          children={events.results.map((event) => (
            <Event key={event.id} {...event} setEvents={setEvents} />
          ))}
          dataLength={events.results.length}
          loader={<Asset spinner />}
          hasMore={!!events.next}
          next={() => fetchMoreData(events, setEvents)}
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
        {/* <PopularGroups mobile /> */}
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
        {/* <PopularGroups /> */}
      </Col>
    </Row>
  );
}

export default GroupPage;
