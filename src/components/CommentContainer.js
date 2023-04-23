import React from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import appStyles from "../App.module.css";
import CommentCreateForm from "../pages/comments/CommentCreateForm";
import Comment from "../pages/comments/Comment";
import { fetchMoreData } from "../utils/utils";
import Asset from "../components/Asset";

const CommentContainer = ({
  currentUser,
  profile_image,
  id,
  setPost,
  comments,
  setComments,
}) => {

  return (
    <Container className={appStyles.Content}>
      {currentUser ? (
        <CommentCreateForm
          profile_id={currentUser.profile_id}
          profileImage={profile_image}
          post={id}
          setPost={setPost}
          setComments={setComments}
        />
      ) : comments.results.length ? (
        "Comments"
      ) : null}
      {comments.results.length ? (
        <InfiniteScroll
          children={comments.results.map((comment) => (
            <Comment
              key={comment.id}
              {...comment}
              setPost={setPost}
              setComments={setComments}
            />
          ))}
          dataLength={comments.results.length}
          loader={<Asset spinner />}
          hasMore={!!comments.next}
          next={() => fetchMoreData(comments, setComments)}
        />
      ) : currentUser ? (
        <span>No comments yet, be the first to comment!</span>
      ) : (
        <span>No comments yet, log in to comment!</span>
      )}
    </Container>
  );
};

export default CommentContainer;
