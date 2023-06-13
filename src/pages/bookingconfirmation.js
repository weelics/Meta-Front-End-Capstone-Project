import { useContext } from "react";
import { FormContext } from "../context/formcontext";
import "../App.css";
const BookingConfirmation = () => {
  const { formValues } = useContext(FormContext);
  const elements = () => {
    const tmp = [];
    for (const value in formValues) {
      tmp.push(formValues[value]);
    }
    return tmp;
  };

  console.log(elements());
  return (
    <section className="confirmation">
      {Object.values(formValues).every((value) => value === "")
        ? <h6>nessuna prenotazione</h6>
        : elements().map((value, i) => {
            return <p key={i}>{value}</p>;
          })}
    </section>
  );
};

export default BookingConfirmation;
