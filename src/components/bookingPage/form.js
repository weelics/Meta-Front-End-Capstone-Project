import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { FormContext } from "../../context/formcontext";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { setFormValues } = useContext(FormContext);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    place: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Invalid e-mail").required("E-mail required"),
    date: Yup.date()
      .min(new Date(), "Reservation date cannot be earlier than today")
      .max(
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        "You cannot book for more than a week"
      )
      .required("Data obbligatoria"),
    time: Yup.string()
      .test(
        "in-range",
        "The times available are: 12:00 - 15:00 / 19:00 - 23:00",
        (value) => {
          const selectedTime = new Date(`1970-01-01T${value}:00`).getTime();
          const startTime1 = new Date(`1970-01-01T12:00:00`).getTime();
          const endTime1 = new Date(`1970-01-01T15:00:00`).getTime();
          const startTime2 = new Date(`1970-01-01T19:00:00`).getTime();
          const endTime2 = new Date(`1970-01-01T23:00:00`).getTime();
          return (
            (selectedTime >= startTime1 && selectedTime < endTime1) ||
            (selectedTime >= startTime2 && selectedTime < endTime2)
          );
        }
      )
      .required("Time required"),
    guests: Yup.number()
      .positive()
      .max(30)
      .integer()
      .required("number of guests required"),
    place: Yup.string(),
  });

  const onSubmit = (values, { setSubmitting }) => {
    window.scroll(0, 0);
    setTimeout(() => {
      setFormValues(values);
      setSubmitting(false);
      navigate("/bookingconfirmation");
    }, 400);
  };

  return (
    <div className="module">
      <h1>Prenotazione Ristorante</h1>
      <p>
        Have a wonderful time dining at our restaurant with your friends and
        family
      </p>
      <h4>Details:</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form">
              <div className="field-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="span" />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="span" />
              </div>

              <div className="field-group">
                <label htmlFor="date">Data:</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component="span" />
              </div>

              <div className="field-group">
                <label htmlFor="time">Time:</label>
                <Field type="time" name="time" />
                <ErrorMessage name="time" component="span" />
              </div>

              <div className="field-group">
                <label htmlFor="guests">Guests:</label>
                <Field type="number" name="guests" />
                <ErrorMessage name="guests" component="span" />
              </div>
              <div className="field-group">
                <label htmlFor="place">Table preference</label>
                <Field as="select" name="place">
                  <option value="indifferent">indifferent</option>
                  <option value="inside">Inside</option>
                  <option value="outside">Outside</option>
                </Field>
                <ErrorMessage name="place" component="span" />
              </div>

              <div className="field-group">
                <button type="submit" disabled={isSubmitting}>
                  Prenota
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
