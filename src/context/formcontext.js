import { useState, createContext } from "react";

export const FormContext = createContext();

export const MyContext = ({ children }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    place: "",
  });
  const formObject = {formValues, setFormValues};
  return <FormContext.Provider value={formObject}>{children}</FormContext.Provider>;
};
