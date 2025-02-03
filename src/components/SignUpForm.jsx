import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [form, setForm] = useState(initialState);

  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "username",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "John@email.com",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ];

  const handleOnChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //prevent
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    alert("HANDLE ON SUBMIT");

    try {
      const response = await axios.post(
        "http://localhost:9001/api/v1/users/register",
        form
      );
      console.log(response.data);

      toast.success("USER CREATED");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
    // call signup api
  };

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Sign up now!</h4>

      <Form onSubmit={handleOnSubmit}>
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
