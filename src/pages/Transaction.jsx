import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TransactionTable } from "../components/TransactionTable";
import { TransactionForm } from "../components/TransactionForm";
import { useEffect } from "react";
import { CustomModal } from "../components/CustomModal";

const Transaction = () => {
  useEffect(() => {}, []);
  return (
    <Container className="p-5">
      <Row className="bg-dark  p-5 rounded">
        <Col>
          <CustomModal>
            <TransactionForm />
          </CustomModal>
          <hr />
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
