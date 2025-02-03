import { Col, Container, Row } from "react-bootstrap";

import React from "react";

export const NewLogin = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col md={6} className="bg-primary">
            Form
          </Col>
          <Col md={6} className="bg-sucess">
            Decoration
          </Col>
        </Row>
      </Container>
    </>
  );
};
