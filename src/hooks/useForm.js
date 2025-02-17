import { useState } from "react";

const handleOnChange = async (e, form, setForm) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    setForm,
    handleOnChange: (e) => {
      handleOnChange(e, form, setForm);
    },
  };
};
