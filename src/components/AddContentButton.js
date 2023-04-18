import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

// code taken from whereisthemouse.com and adapted --> More info in README
const AddContentButton = ({ url, text, mobile }) => {
  return (
    <Container className={`${mobile && "d-lg-none text-center mb-3 m-0 p-0"}`}>
      {mobile ? (
        <Button
          className={`d-flex justify-content-around ${btnStyles.AddContentButton} ${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Wide}`}
          as={Link}
          to={url}
        >
          {text}
        </Button>
      ) : (
        <Button
          className={`${btnStyles.AddContentButton} ${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Wide}`}
          as={Link}
          to={url}
        >
          {text}
        </Button>
      )}
    </Container>
  );
};

export default AddContentButton;
