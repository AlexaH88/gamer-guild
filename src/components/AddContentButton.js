import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

// code taken from whereisthemouse.com and adapted --> More info in README
const AddContentButton = ({ url, text }) => {
  return (
    <Button
      className={`${btnStyles.AddContentButton} ${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Wide}`}
      as={Link}
      to={url}
    >
      {text}
    </Button>
  );
};

export default AddContentButton;
