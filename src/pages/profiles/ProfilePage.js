import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import Event from "../events/Event";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no_results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileEvents, setProfileEvents] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profilePosts },
          { data: profileEvents },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/posts/?owner__profile=${id}`),
          axiosReq.get(`/events/?owner__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setProfileEvents(profileEvents);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h2 className="m-2">{profile?.owner}</h2>
          {profile?.content && <Col className="p-3">{profile.content}</Col>}
          <Row className="justify-content-center no-gutters">
            {profile?.xbox && (
              <a href={profile?.xbox} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-xbox" aria-hidden="true"></i>
              </a>
            )}
            {profile?.playstation && (
              <a href={profile?.playstation} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-playstation" aria-hidden="true"></i>
              </a>
            )}
            {profile?.steam && (
              <a href={profile?.steam} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-steam" aria-hidden="true"></i>
              </a>
            )}
            {profile?.discord && (
              <a href={profile?.discord} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-discord" aria-hidden="true"></i>
              </a>
            )}
            {profile?.youtube && (
              <a href={profile?.youtube} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            )}
            {profile?.twitch && (
              <a href={profile?.twitch} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitch" aria-hidden="true"></i>
              </a>
            )}
          </Row>
          <Row className="mt-2 justify-content-space-between">
            <Col className="my-2">
              <div>posts</div>
              <div className={styles.Count}>{profile?.posts_count}</div>
            </Col>
            <Col className="my-2">
              <div>events</div>
              <div className={styles.Count}>{profile?.events_count}</div>
            </Col>
            <Col className="my-2">
              <div>followers</div>
              <div className={styles.Count}>{profile?.followers_count}</div>
            </Col>
            <Col className="my-2">
              <div>following</div>
              <div className={styles.Count}>{profile?.following_count}</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlueOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  const mainProfileEvents = (
    <>
      {profileEvents.results.length ? (
        <InfiniteScroll
          children={profileEvents.results.map((event) => (
            <Event key={event.id} {...event} setEvents={setProfileEvents} />
          ))}
          dataLength={profileEvents.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileEvents.next}
          next={() => fetchMoreData(profileEvents, setProfileEvents)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't created any events yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              <hr />
              <Row noGutters className="px-3 text-center">
                <Col lg={6}>
                  <h3 className={styles.Heading}>Posts</h3>
                  {mainProfilePosts}
                </Col>
                <Col lg={6}>
                  <h3 className={styles.Heading}>Events</h3>
                  {mainProfileEvents}
                </Col>
              </Row>
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
