import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContacts } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addContacts(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>
        Name
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Number
        <input type="text" {...formik.getFieldProps("number")} />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
