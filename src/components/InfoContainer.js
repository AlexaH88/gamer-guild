import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Form.module.css";
import { Link } from "react-router-dom";

const InfoContainer = ({ url, text, span_text }) => {
  return (
    <Container className={`mt-3 ${appStyles.Content}`}>
      <Link className={styles.Link} to={url}>
        {text} <span>{span_text}</span>
      </Link>
    </Container>
  );
};

export default InfoContainer;
