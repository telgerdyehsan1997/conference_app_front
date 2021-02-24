import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Base = ({ content }) => {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <Row className="wrapper">
          <div className="d-none" />
          <Col>{content}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Base;
