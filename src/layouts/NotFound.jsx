import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const NotFound = () => (
  <Row>
    <Col md={6} className="m-4 p-4 bg-white">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </Col>
  </Row>
);

export default NotFound;
