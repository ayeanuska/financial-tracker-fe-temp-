import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const { setUser } = useUser();

  const [form, setForm] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const fields = [
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
  ];

  const handleOnChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();

    try {
      //call login API
      const response = await axios.post(
        "http://localhost:9001/api/v1/users/login",
        form
      );
      toast.success(response.data.message);

      //update the user context
      setUser(response.data.user);

      //store the jwt access token to local storage
      localStorage.setItem("accessToken", response.data.accessToken);

      //navigate to dahboardpage
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Sign In now!</h4>
      <hr />
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
