import "./booking.css";
import Restaurant from "../../assets/restaurant.jpg";
import BookingForm from "./form";
const BookingHeader = () => {
  return (
    <section className="booking">
      <div className="form-layout">
        <img src={Restaurant} alt="img" />
        <BookingForm />
      </div>
    </section>
  );
};
export default BookingHeader;
