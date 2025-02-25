import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

const initialState = {
  type: "",
  title: "",
  amount: "",
  date: "",
};

export const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { setShowModal } = useUser();

  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();

    console.log(form);

    //call post api to create transaction

    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.post(
        "http://localhost:9001/api/v1/transactions ",
        form,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);

      if (response.data.status == "success") {
        toast.success(response.data.message);
        setShowModal(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    {
      label: "Title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },
    {
      label: "Amount",
      placeholder: "44",
      required: true,
      type: "number",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transaction Date",

      required: true,
      type: "date",
      name: "date",
      value: form.date,
    },
  ];

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Add your transaction!</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Transaction type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">-- select --</option>
            <option value="Income">Income</option>
            <option value="Expense">Expenses</option>
          </Form.Select>
        </Form.Group>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
