import { useContext } from "react";
import { FormContext } from "../context/formcontext";
import Reservation from "../components/reservation";
import "../App.css";
import LemonButton from "../components/LemonButton";
import { Link } from "react-router-dom";
const BookingConfirmation = () => {
  const { formValues } = useContext(FormContext);

  return (
    <section className="confirmation">
      {Object.values(formValues).every((value) => value === "") ? (
        <h6>nessuna prenotazione</h6>
      ) : (
        <Reservation bookingData={formValues} />
      )}
      <Link to={"/"}>
        <LemonButton>Return Home</LemonButton>
      </Link>
    </section>
  );
};

export default BookingConfirmation;
