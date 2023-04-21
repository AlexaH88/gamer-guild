import React from "react";
import { Col, Image } from "react-bootstrap";
import appStyles from "../App.module.css";

const FillerImage = ({ src, style }) => {
  return (
    <Col md={6} className={`my-auto d-none d-md-block p-2 ${style}`}>
      <Image className={`${appStyles.FillerImage}`} src={src} />
    </Col>
  );
};

export default FillerImage;
