import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

import DashboardChart from "../components/DashboardChart";

const Dashboard = () => {
  useEffect(() => {}, []);

  return (
    <Container className="p-5">
      <Row className="bg-dark  p-5 rounded gap-2">
        <Col md={6}>
          <h2>Dashboard</h2>
        </Col>
        <hr />
        <DashboardChart />
      </Row>
    </Container>
  );
};

export default Dashboard;
