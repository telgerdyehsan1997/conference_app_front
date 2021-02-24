import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleLogin from "components/User/google-login";

const Auth = ({ content }) => {
  return (
    <div className="d-flex h-100">
      <Container className="auth-container align-self-center">
        <Row className="wrapper">
          <Col md={6} className="mx-auto bg-white p-3 rounded">
            <h1 className="logo text-center">DADEMAN</h1>
            <GoogleLogin />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auth;
