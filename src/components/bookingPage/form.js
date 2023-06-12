import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome obbligatorio"),
    email: Yup.string()
      .email("Email non valida")
      .required("Email obbligatoria"),
    date: Yup.date().required("Data obbligatoria"),
    time: Yup.string().required("Orario obbligatorio"),
    guests: Yup.number()
      .positive()
      .integer()
      .required("Numero di ospiti obbligatorio"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Prenotazione Ristorante</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Nome:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <br />
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label htmlFor="date">Data:</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" />
            <br />
            <label htmlFor="time">Orario:</label>
            <Field type="time" name="time" />
            <ErrorMessage name="time" component="div" />
            <br />
            <label htmlFor="guests">Numero di ospiti:</label>
            <Field type="number" name="guests" />
            <ErrorMessage name="guests" component="div" />
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
