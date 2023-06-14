import { useContext } from "react";
import { FormContext } from "../context/formcontext";
import Reservation from "../components/reservation";
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
      {Object.values(formValues).every((value) => value === "") ? (
        <h6>nessuna prenotazione</h6>
      ) : (
        <Reservation />
      )}
    </section>
  );
};

export default BookingConfirmation;
