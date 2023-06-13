import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { FormContext } from "../../context/formcontext";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const {setFormValues} = useContext(FormContext);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    place: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome obbligatorio"),
    email: Yup.string()
      .email("Email non valida")
      .required("Email obbligatoria"),
    date: Yup.date()
      .min(
        new Date(),
        "'La data di prenotazione non può essere precedente a oggi"
      )
      .max(
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        "non puoi prenotare oltre una settimana"
      )
      .required("Data obbligatoria"),
    time: Yup.string()
      .test(
        "in-range",
        "L'ora selezionata non è disponibile per la prenotazione",
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
      .required("Orario obbligatorio"),
    guests: Yup.number()
      .positive()
      .max(30)
      .integer()
      .required("Numero di ospiti obbligatorio"),
    place: Yup.string().required("")
  });

  const onSubmit = (values, { setSubmitting }) => {

      setFormValues(values);
      navigate("/bookingconfirmation");
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
            <label htmlFor="name">Nome:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
            <br />
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
            <br />
            <label htmlFor="date">Data:</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="span" />
            <br />
            <label htmlFor="time">Orario:</label>
            <Field type="time" name="time" />
            <ErrorMessage name="time" component="span" />
            <br />
            <label htmlFor="guests">Numero di ospiti:</label>
            <Field type="number" name="guests" />
            <ErrorMessage name="guests" component="span" />
            <br />
            <label htmlFor="place">Table preference</label>
            <Field as="select" name="place">
              <option value="indifferent">indifferent</option>
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </Field>
            <ErrorMessage name="place" component="span" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Prenota
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
