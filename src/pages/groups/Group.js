import React from "react";
import styles from "../../styles/Group.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { useSetGroupData } from "../../contexts/GroupDataContext";

const Group = (props) => {
  const { group, mobile, imageSize = 55 } = props;
  const { id, member_id, image, owner } = group;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleJoin, handleUnjoin } = useSetGroupData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/groups/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (member_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.BlueOutline}`}
              onClick={() => handleUnjoin(group)}
            >
              leave
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => handleJoin(group)}
            >
              join
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Group;
