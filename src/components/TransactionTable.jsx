import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useTransaction } from "../context/TransactionContext";

export const TransactionTable = () => {
  const { setShowTransactionModal } = useUser();
  const { transactions, setTransactions, fetchTransaction } = useTransaction();

  const [displayTran, setDisplayTran] = useState(transactions);
  const [idsToDelete, setIdsToDelete] = useState([]);

  //fetch transaction data
  useEffect(() => {
    fetchTransaction();
  }, []);

  //update temp display transaction variable
  useEffect(() => {
    console.log("useeffect", transactions);
    setDisplayTran(transactions);
  }, [transactions]);

  const handleOnSearch = (e) => {
    console.log(e.target.value);

    const tempTransaction = transactions.filter((item) => {
      return item.description.includes(e.target.value);
    });
    setDisplayTran(tempTransaction);
  };

  const handleOnSelect = (e) => {};

  const handleOnDelete = async () => {};

  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTran.length} transaction(s) found!</div>
        <div>
          <Form.Control
            placeholder="Search transactions..."
            type="text"
            onChange={handleOnSearch}
          />
        </div>
        <div>
          <Button onClick={() => setShowTransactionModal(true)}>
            <FaPlusCircle /> Add New Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All"
          value="all"
          onChange={handleOnSelect}
          checked={displayTran.length === idsToDelete.length}
        />
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date </th>
            <th>Title</th>
            <th>Out </th>
            <th>In </th>
          </tr>
        </thead>
        <tbody>
          {displayTran.length > 0 &&
            displayTran.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    label={t.createdAt.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>
                <td>{t.title}</td>
                {t.type === "Expenses" && (
                  <>
                    <td className="out">-${t.amount} </td>
                    <td> </td>
                  </>
                )}
                {t.type === "Income" && (
                  <>
                    <td> </td>
                    <td className="in">${t.amount} </td>
                  </>
                )}
              </tr>
            ))}
          {/* <tr>
          <td>1</td>
          <td>20-3-2024</td>
          <td>Salary</td>
          <td> </td>
          <td>$ 3456 </td>
        </tr>
        <tr>
          <td>2</td>
          <td>20-3-2024</td>
          <td>Shopping</td>
          <td className="text-danger-important">$ -345 </td>
          <td> </td>
        </tr> */}
          {/* <tr>
          <td>3</td>
          <td>20-3-2024</td>
          <td>Found on the street</td>
          <td> </td>
          <td>$ 300 </td>
        </tr> */}

          <tr className="fw-bold text-end">
            <td colSpan={3}> Total Balance</td>

            <td colSpan={2}>
              $
              {displayTran.reduce((acc, t) => {
                return t.type === "Income" ? acc + t.amount : acc - t.amount;
              }, 0)}{" "}
            </td>
          </tr>
        </tbody>
      </Table>
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {idsToDelete.length} Transactions
          </Button>
        </div>
      )}
    </>
  );
};
