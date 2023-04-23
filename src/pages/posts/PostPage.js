import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import PopularProfiles from "../profiles/PopularProfiles";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import AddContentButton from "../../components/AddContentButton";
import CommentContainer from "../../components/CommentContainer";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
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
        {currentUser && (
          <AddContentButton url="/posts/create" text="Add Post" mobile />
        )}
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <CommentContainer
          currentUser={currentUser}
          profile_image={profile_image}
          id={id}
          setPost={setPost}
          comments={comments}
          setComments={setComments}
        />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {currentUser && (
          <AddContentButton url="/posts/create" text="Add Post" />
        )}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostPage;
