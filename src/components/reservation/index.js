import "./reservation.css";

const Reservation = ({ bookingData }) => {
  return (
    <section className="reservation">
      <h1>Booking done!</h1>
      <div className="reservation-schema">
        {Object.keys(bookingData).map((key, i) => {
          return (
            <div key={i} className="reservation-data">
              <dt>{key}:</dt>
              <dd>{bookingData[key]}</dd>
            </div>
          );
        })}
      </div>
      <p style={{ maxWidth: "400px" }}>
        In case of problems we will send you an email, thank you very much for
        choosing us, see you soon!
      </p>
    </section>
  );
};
export default Reservation;
