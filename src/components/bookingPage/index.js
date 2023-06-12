import "./booking.css";
import Restaurant from "../../assets/restaurant.jpg";
import BookingForm from "./form";
const BookingHeader = () => {
  return (
    <section className="booking">
      <h1>Book a Table</h1>
      <div className="form">
        <img src={Restaurant} alt="img" />
        <BookingForm />
      </div>
    </section>
  );
};
export default BookingHeader;
