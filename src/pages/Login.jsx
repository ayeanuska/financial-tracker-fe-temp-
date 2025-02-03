import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FinancialTips } from "../components/FinancialTips";
import { SignUpForm } from "../components/SignUpForm";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { SignInForm } from "../components/SignInForm";

const Login = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-5 rounded">
        <Col md={6}>
          <SignInForm />
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-column justify-content-center fs-1 "
            style={{
              height: "100%",
            }}
          >
            <div className="text-danger text-decoration-line-through">
              {" "}
              <BsGraphDownArrow /> Reduce your expenses
            </div>
            <div className="text-success">
              {" "}
              <BsGraphUpArrow /> Increase your Income
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
